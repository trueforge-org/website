#!/usr/bin/env node
// Announce newly-added news articles for a single sub-project to Discord.
//
// Inputs (env):
//   PROJECT_KEY      - one of: trueforge, containerforge, gamingforge, manicmeads, bodyforge, truecharts
//   PROJECT_LABEL    - display name (e.g. "TrueForge")
//   PROJECT_URL      - public site URL (used to build article links)
//   DISCORD_WEBHOOK_<KEY>  - Per-project Discord webhook (e.g. DISCORD_WEBHOOK_TRUEFORGE).
//   DISCORD_WEBHOOK        - Global Discord webhook, always posted to.
//                            If both are set, BOTH receive the announcement.
//                            At least one Discord webhook must be set.
//   OC_API_TOKEN           - Open Collective Personal Token. If set, public
//                            Updates are also published on Open Collective.
//   OC_COLLECTIVE_SLUG     - Global Open Collective slug, always posted to.
//   OC_COLLECTIVE_SLUG_<KEY> - Per-project Open Collective slug (optional).
//                            Each project also has a hardcoded default slug
//                            matching its PROJECT_KEY. All configured slugs
//                            (defaults + env vars) receive the Update.
//   STATE_FILE       - path to state JSON file (defaults to .github/news-announced.json)
//
// Behaviour:
//   - Scans <project>/src/content/docs/news/*.md(x).
//   - For each post not already in the state file's `announced` list (keyed
//     by repo-relative file path), posts a Discord message and records it.
//   - Writes the updated state file. The caller is responsible for
//     committing the change back to the repo.

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative, resolve } from "node:path";

// Default Open Collective slugs per project. These are always included so
// that publishing works out of the box; additional slugs may be appended via
// the OC_COLLECTIVE_SLUG_<KEY> and OC_COLLECTIVE_SLUG env vars.
const DEFAULT_OC_SLUGS = {
  trueforge: ["trueforge"],
  containerforge: ["containerforge"],
  gamingforge: ["gamingforge"],
  manicmeads: ["manicmeads"],
  bodyforge: ["bodyforge"],
  truecharts: ["truecharts"],
};

const repoRoot = process.cwd();
const projectKey = required("PROJECT_KEY");
const projectLabel = required("PROJECT_LABEL");
const projectUrl = (process.env.PROJECT_URL || "").replace(/\/+$/, "");
const webhooks = resolveWebhooks(projectKey);
const ocSlugs = resolveOpenCollectiveSlugs(projectKey);
const ocToken = process.env.OC_API_TOKEN || "";
const stateFile = resolve(
  repoRoot,
  process.env.STATE_FILE || ".github/news-announced.json",
);

// Resolve a list of Open Collective slugs for the given project key. The
// hardcoded defaults, per-project, and global slugs are combined and
// de-duplicated. Multiple slugs in a single env var may be separated by
// commas/whitespace.
function resolveOpenCollectiveSlugs(key) {
  const perProjectVar = `OC_COLLECTIVE_SLUG_${key.toUpperCase()}`;
  const defaults = DEFAULT_OC_SLUGS[key.toLowerCase()] || [];
  const perProject = splitList(process.env[perProjectVar]);
  const global = splitList(process.env.OC_COLLECTIVE_SLUG);
  return [...new Set([...defaults, ...perProject, ...global])];
}

function splitList(value) {
  if (!value) return [];
  return value
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Resolve a list of Discord webhook URLs for the given project key.
// Both the per-project and the global webhook are used (combined and
// de-duplicated). Each env var may contain multiple webhooks separated by
// newlines, commas, or whitespace.
function resolveWebhooks(key) {
  const perProjectVar = `DISCORD_WEBHOOK_${key.toUpperCase()}`;
  const perProject = splitWebhooks(process.env[perProjectVar]);
  const global = splitWebhooks(process.env.DISCORD_WEBHOOK);
  const combined = [...new Set([...perProject, ...global])];
  if (combined.length === 0) {
    console.error(
      `Missing webhook: set ${perProjectVar} and/or DISCORD_WEBHOOK.`,
    );
    process.exit(1);
  }
  return combined;
}

function splitWebhooks(value) {
  if (!value) return [];
  return value
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter((s) => s.startsWith("http"));
}

// Redact the secret token portion of a Discord webhook URL for logging.
function redactWebhook(url) {
  return url.replace(/(\/webhooks\/\d+\/)[^/?#]+/, "$1<redacted>");
}

function required(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required env var: ${name}`);
    process.exit(1);
  }
  return value;
}

const newsDir = join(repoRoot, projectKey, "src/content/docs/news");
if (!existsSync(newsDir)) {
  console.log(`No news directory for ${projectKey} (${newsDir}); nothing to do.`);
  process.exit(0);
}

const state = loadState(stateFile);
const announced = new Set(state.announced || []);

const entries = readdirSync(newsDir, { withFileTypes: true })
  .filter((d) => d.isFile() && /\.(md|mdx)$/i.test(d.name))
  .map((d) => join(newsDir, d.name));

const newPosts = [];
for (const filePath of entries) {
  const repoRelative = relative(repoRoot, filePath);
  if (announced.has(repoRelative)) continue;

  const raw = readFileSync(filePath, "utf8");
  const fm = parseFrontmatter(raw);
  if (!fm) {
    console.warn(`Skipping ${repoRelative}: no frontmatter found.`);
    continue;
  }
  if (!fm.title || !fm.slug) {
    console.warn(`Skipping ${repoRelative}: missing title or slug.`);
    continue;
  }
  const excerpt = extractExcerpt(raw);
  newPosts.push({ filePath: repoRelative, fm, excerpt });
}

if (newPosts.length === 0) {
  console.log(`No new ${projectLabel} news posts to announce.`);
  process.exit(0);
}

// Sort oldest first so announcements are chronological.
newPosts.sort((a, b) => {
  const da = String(a.fm.date || "");
  const db = String(b.fm.date || "");
  return da.localeCompare(db);
});

// Rate limit: at most one announcement per day across all projects.
const RATE_LIMIT_MS = 24 * 60 * 60 * 1000;
const now = Date.now();
const lastAnnouncedAt = state.lastAnnouncedAt
  ? Date.parse(state.lastAnnouncedAt)
  : 0;
if (Number.isFinite(lastAnnouncedAt) && lastAnnouncedAt > 0) {
  const elapsed = now - lastAnnouncedAt;
  if (elapsed < RATE_LIMIT_MS) {
    const waitHours = Math.ceil((RATE_LIMIT_MS - elapsed) / (60 * 60 * 1000));
    const elapsedHours = Math.floor(elapsed / (60 * 60 * 1000));
    console.log(
      `Rate limit: last announcement was ${elapsedHours}h ago; ` +
        `skipping (need to wait ~${waitHours}h). ${newPosts.length} post(s) deferred.`,
    );
    process.exit(0);
  }
}

// Only announce one post per run to honour the 1/day rate limit.
const post = newPosts[0];
const deferred = newPosts.length - 1;

const link = projectUrl
  ? `${projectUrl}/${String(post.fm.slug).replace(/^\/+/, "")}`
  : null;

const headerName = `**${projectLabel} News: ${post.fm.title}**`;
const lines = [headerName];
if (post.fm.date) lines.push(`*Published ${post.fm.date}*`);
if (post.excerpt) lines.push(`*${post.excerpt}*`);
if (link) lines.push(link);

let failures = 0;
const message = lines.join("\n");
let anySuccess = false;
for (const url of webhooks) {
  try {
    await postToDiscord(url, message);
    anySuccess = true;
    console.log(`Announced ${post.filePath} -> ${redactWebhook(url)}`);
  } catch (err) {
    failures += 1;
    console.error(
      `Failed to announce ${post.filePath} to ${redactWebhook(url)}: ${err.message}`,
    );
  }
}

// Open Collective: publish a public Update on each configured collective.
// OC failures are logged as warnings but do NOT fail the script — Discord
// is the primary target, and we still want the state commit to proceed.
console.log(
  `Open Collective: token=${ocToken ? "present" : "missing"}, ` +
    `slugs=[${ocSlugs.join(", ") || "none"}]`,
);
if (ocSlugs.length === 0) {
  console.log(
    "Open Collective: no slugs configured (set OC_COLLECTIVE_SLUG and/or " +
      `OC_COLLECTIVE_SLUG_${projectKey.toUpperCase()}); skipping OC publish.`,
  );
} else if (!ocToken) {
  console.warn(
    "::warning::Open Collective slug(s) configured but OC_API_TOKEN is not set; skipping OC publish.",
  );
} else {
  const ocBody = buildOpenCollectiveBody(post, link);
  for (const slug of ocSlugs) {
    console.log(`Open Collective: publishing update on '${slug}'...`);
    try {
      const result = await publishOpenCollectiveUpdate(
        ocToken,
        slug,
        post.fm.title,
        ocBody,
      );
      console.log(
        `Open Collective: published on '${slug}' ` +
          `(updateId=${result.updateId}, publishedAt=${result.publishedAt})`,
      );
    } catch (err) {
      console.warn(
        `::warning::Open Collective publish failed for '${slug}': ${err.message}`,
      );
    }
  }
}

if (anySuccess) {
  announced.add(post.filePath);
  state.lastAnnouncedAt = new Date(now).toISOString();
  if (deferred > 0) {
    console.log(`${deferred} additional post(s) deferred to a later run.`);
  }
}

state.announced = Array.from(announced).sort();
writeFileSync(stateFile, JSON.stringify(state, null, 2) + "\n");

if (failures > 0) {
  console.error(`${failures} announcement(s) failed.`);
  process.exit(1);
}

// ---------- helpers ----------

function loadState(path) {
  if (!existsSync(path)) return { announced: [] };
  try {
    const parsed = JSON.parse(readFileSync(path, "utf8"));
    if (!Array.isArray(parsed.announced)) parsed.announced = [];
    return parsed;
  } catch (err) {
    console.error(`Could not parse state file ${path}: ${err.message}`);
    process.exit(1);
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const block = match[1];
  const data = {};
  const lines = block.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return data;
}

// Extract a short plain-text excerpt from the article body (after the
// frontmatter). Strips markdown/MDX syntax, takes up to ~280 chars,
// trims to a sentence/word boundary, and appends an ellipsis.
function extractExcerpt(content, maxLen = 280) {
  const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");

  // Split into paragraphs and find the first non-heading, non-import block.
  const paragraphs = body.split(/\r?\n\s*\r?\n/);
  let para = "";
  for (const raw of paragraphs) {
    const trimmed = raw.trim();
    if (!trimmed) continue;
    if (/^(#|import\b|export\b|<|:::)/.test(trimmed)) continue;
    para = trimmed;
    break;
  }
  if (!para) return "";

  // Strip common markdown/MDX syntax to plain text.
  let text = para
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> text
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1") // emphasis
    .replace(/<[^>]+>/g, "") // html/jsx tags
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return "";
  if (text.length <= maxLen) return text.replace(/[.!?,;:\s]+$/, "") + "...";

  let cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > maxLen * 0.6) cut = cut.slice(0, lastSpace);
  return cut.replace(/[.!?,;:\s]+$/, "") + "...";
}

async function postToDiscord(url, content) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content,
      allowed_mentions: { parse: [] },
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Discord webhook returned ${res.status}: ${body}`);
  }
}

// Build the HTML body for the Open Collective Update.
function buildOpenCollectiveBody(post, link) {
  const parts = [];
  if (post.fm.date) {
    parts.push(`<p><em>Published ${escapeHtml(post.fm.date)}</em></p>`);
  }
  if (post.excerpt) {
    parts.push(`<p><em>${escapeHtml(post.excerpt)}</em></p>`);
  }
  if (link) {
    const safe = escapeHtml(link);
    parts.push(`<p><a href="${safe}">Read the full article on ${escapeHtml(projectLabel)}</a></p>`);
  }
  return parts.join("\n");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Publish a public Update on the given Open Collective collective slug
// using the GraphQL v2 API. Creates a draft Update then publishes it to
// the ALL audience. Personal Tokens authenticate via the `Personal-Token`
// header.
async function publishOpenCollectiveUpdate(token, slug, title, html) {
  const endpoint = "https://api.opencollective.com/graphql/v2";

  console.log(`  [OC] createUpdate(slug='${slug}', title='${title}')`);
  const createQuery = `
    mutation CreateUpdate($update: UpdateCreateInput!) {
      createUpdate(update: $update) { id legacyId slug }
    }
  `.trim();
  const createVariables = {
    update: {
      account: { slug },
      title,
      html,
      isPrivate: false,
      isChangelog: false,
    },
  };
  const created = await ocGraphQL(endpoint, token, createQuery, createVariables);
  const updateId = created?.createUpdate?.id;
  if (!updateId) {
    throw new Error("createUpdate returned no id");
  }
  console.log(
    `  [OC] created draft id=${updateId} legacyId=${created.createUpdate.legacyId} slug=${created.createUpdate.slug}`,
  );

  console.log(`  [OC] publishUpdate(id='${updateId}', audience='ALL')`);
  const publishQuery = `
    mutation PublishUpdate($id: String!, $audience: UpdateAudience) {
      publishUpdate(id: $id, notificationAudience: $audience) {
        id
        publishedAt
      }
    }
  `.trim();
  const published = await ocGraphQL(endpoint, token, publishQuery, {
    id: updateId,
    audience: "ALL",
  });
  return {
    updateId,
    publishedAt: published?.publishUpdate?.publishedAt || "unknown",
  };
}

async function ocGraphQL(endpoint, token, query, variables) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Personal-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });
  const text = await res.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error(`Open Collective returned ${res.status}: ${text.slice(0, 200)}`);
  }
  if (!res.ok || parsed.errors) {
    const msg = parsed.errors
      ? parsed.errors.map((e) => e.message).join("; ")
      : `HTTP ${res.status}`;
    throw new Error(`Open Collective error: ${msg}`);
  }
  return parsed.data;
}
