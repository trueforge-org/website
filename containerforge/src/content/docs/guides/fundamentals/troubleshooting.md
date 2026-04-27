---
title: Troubleshooting
sidebar:
  order: 10
---

A short checklist for the issues we see most often. If none of these apply, please open an issue in the [containers repository](https://github.com/trueforge-org/containers/issues) with logs and the exact image tag.

## Container Restarts on Startup

Check the logs first:

```sh
docker logs my-app
```

The most common causes are:

- Wrong volume permissions — see [Persistent Storage](/guides/fundamentals/persistent-storage/).
- Missing required environment variable — see the per-container page.
- Port already in use on the host.

## "Permission Denied" on `/config`

The mounted directory is not owned by the container user (`568:568` by default):

```sh
sudo chown -R 568:568 /path/to/config
```

If you cannot change ownership, override the user instead — see [Rootless Containers](/guides/containerforge/rootless/).

## Image Pull Fails

- Verify the tag exists: `docker pull ghcr.io/trueforge-org/<app>:<tag>`.
- Authenticated pulls require a GitHub token with `read:packages` for private mirrors. Public images need no login.
- For air-gapped hosts, mirror the image to your internal registry and update the reference.

## Slow Start After Update

The container is verifying or migrating data. Watch the logs and give it time before restarting. For large databases this can take several minutes on the first boot after an upgrade.

## Networking Between Containers Doesn't Work

- Containers must share a [user-defined network](/guides/fundamentals/networking/) — the default `bridge` network does not provide DNS-based service discovery.
- Service names are case-sensitive and must match the key in `services:`.

## Verifying You Have the Right Image

Confirm the image was built by our CI:

```sh
gh attestation verify --repo trueforge-org/containers \
  oci://oci.trueforge.org/containerforge/<app>:<tag>
```

See [Verifying Image Signatures](/guides/containerforge/verifying-signatures/) for the full procedure.

## Collecting Diagnostics

When opening an issue, include:

- The exact image reference, including tag and ideally the `sha256` digest.
- Output of `docker inspect <container>`.
- Recent container logs (`docker logs --tail=200 <container>`).
- Host OS, container runtime, and architecture.
