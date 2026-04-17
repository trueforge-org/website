---
title: Available Base Images
sidebar:
  order: 2
---

We aim to base all our containers on top of our standardised Ubuntu base image. The following base images are available:

| Base Image | Status |
|---|---|
| Ubuntu | ✅ Available |
| Python | ✅ Available |
| Golang | ✅ Available |
| Node | ✅ Available |
| Java 17 | ✅ Available |
| Java 21 | ✅ Available |
| SteamCMD | 🔜 To Be Announced |

:::note
In some case-by-case scenarios, we might instead use an external base image. Our aim is always to replace those with ours in due time.
:::

## Pulling a Base Image

All images are published via the GitHub Container Registry at `oci.trueforge.org/containerforge/`. For example:

```sh
docker pull oci.trueforge.org/containerforge/ubuntu:latest
```
