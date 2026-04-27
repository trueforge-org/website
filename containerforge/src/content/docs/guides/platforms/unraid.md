---
title: Unraid
sidebar:
  order: 4
---

Our images can be deployed on [Unraid](https://unraid.net/) using the built-in Docker manager. There is no Community Apps template required — you can add any image manually.

## Adding a Container

1. Open the **Docker** tab and click **Add Container**.
2. Set **Repository** to the full image reference, e.g. `ghcr.io/trueforge-org/home-assistant:2025.5.1`.
3. Add **Path**, **Port**, and **Variable** mappings as needed.
4. Under **Extra Parameters**, set the user so volumes are owned correctly:

   ```text
   --user 568:568
   ```

## Permissions

Unraid traditionally uses `nobody:users` (`99:100`) on the array. Either:

- Mount the volume and `chown -R 568:568` it once, or
- Override the container user to `99:100` (see [Rootless Containers](/guides/containerforge/rootless/)).

:::caution
Changing the container user is supported but not extensively tested. Prefer adjusting volume ownership.
:::

## Updates

Use Unraid's built-in update check, or pin the image tag and rely on [Renovate](/guides/tools/renovate/) to bump it in your configuration repository.
