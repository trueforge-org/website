---
title: Multi-Architecture Images
sidebar:
  order: 8
---

All ContainerForge images are published as multi-architecture manifests. The container runtime automatically pulls the variant that matches the host.

## Supported Architectures

- `linux/amd64` — Intel and AMD 64-bit
- `linux/arm64` — Apple Silicon, AWS Graviton, Raspberry Pi 4/5 (64-bit OS)

Additional architectures may be available per image — check the registry listing for the exact set.

## Inspecting a Manifest

```sh
docker buildx imagetools inspect ghcr.io/trueforge-org/home-assistant:2025.5.1
```

Or with [crane](https://github.com/google/go-containerregistry/blob/main/cmd/crane/README.md):

```sh
crane manifest ghcr.io/trueforge-org/home-assistant:2025.5.1 | jq
```

## Forcing a Specific Architecture

When testing on a workstation with a different CPU than your target server:

```sh
docker pull --platform linux/arm64 ghcr.io/trueforge-org/home-assistant:2025.5.1
```

In Compose:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    platform: linux/arm64
```

## Cross-Architecture Emulation

Run an `arm64` image on an `amd64` host (or vice versa) by enabling QEMU emulation:

```sh
docker run --rm --privileged tonistiigi/binfmt --install all
```

Performance will be poor — emulation is for testing, not production.
