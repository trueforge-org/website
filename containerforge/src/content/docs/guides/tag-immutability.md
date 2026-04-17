---
title: Tag Immutability
sidebar:
  order: 2
---

Containers built here do not use immutable tags in the traditional sense, as seen with [linuxserver.io](https://fleet.linuxserver.io/) or [Bitnami](https://bitnami.com/stacks/containers). Instead, we insist on pinning to the `sha256` digest of the image. While this approach is less visually appealing, it ensures functionality and immutability.

| Container | Immutable |
|-----------------------|----|
| `ghcr.io/trueforge-org/home-assistant:rolling` | ❌ |
| `ghcr.io/trueforge-org/home-assistant:2025.5.1` | ❌ |
| `ghcr.io/trueforge-org/home-assistant:rolling@sha256:8053...` | ✅ |
| `ghcr.io/trueforge-org/home-assistant:2025.5.1@sha256:8053...` | ✅ |

:::tip
If pinning an image to the `sha256` digest, tools like [Renovate](https://github.com/renovatebot/renovate) can update containers based on digest or version changes.
:::
