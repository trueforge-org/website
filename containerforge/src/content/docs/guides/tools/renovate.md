---
title: Automatic Updates with Renovate
sidebar:
  order: 2
---

[Renovate](https://github.com/renovatebot/renovate) is the recommended way to keep our images up to date. It opens pull requests against your Compose, Helm, or Kustomize files when a new tag or digest is published.

## Minimal Configuration

Add a `renovate.json` to the repository hosting your Compose files:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "docker-compose": {
    "fileMatch": ["(^|/)compose\\.ya?ml$", "(^|/)docker-compose\\.ya?ml$"]
  }
}
```

## Pinning to Digests

Combine Renovate's `pinDigests` preset with our [tag pinning](/guides/containerforge/tag-immutability/) recommendation:

```json
{
  "extends": ["config:recommended", "docker:pinDigests"]
}
```

After enabling, your image references are rewritten to include both the tag and the `sha256` digest, e.g.:

```yaml
image: ghcr.io/trueforge-org/home-assistant:2025.5.1@sha256:8053...
```

Renovate will then update the digest whenever the tag is rebuilt.

## Limiting Update Scope

To accept only patch and digest updates for a given image:

```json
{
  "packageRules": [
    {
      "matchPackagePatterns": ["^ghcr.io/trueforge-org/"],
      "matchUpdateTypes": ["major", "minor"],
      "enabled": false
    }
  ]
}
```

See the [Renovate documentation](https://docs.renovatebot.com/configuration-options/) for the full set of options.
