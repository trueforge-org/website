---
title: Mission & Overview
sidebar:
  order: 0
---

ContainerForge provides [semantically versioned](https://semver.org/), [rootless](https://rootlesscontaine.rs/), and [multi-architecture](https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/) containers for various applications.

We adhere to the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle), logging to stdout, maintaining [one process per container](https://testdriven.io/tips/59de3279-4a2d-4556-9cd0-b444249ed31e/), avoiding tools like [s6-overlay](https://github.com/just-containers/s6-overlay), and building all images on top of [Ubuntu](https://hub.docker.com/_/ubuntu).

We believe in not doing work twice without good reason. That is why we aim to follow the CI standards set by the [home-operations](https://github.com/home-operations) community [repository](https://github.com/home-operations/containers).

## Features at a Glance

- **Rootless** — containers run as user `568:568` by default
- **Multi-architecture** — amd64, arm64 and more
- **Semantic versioning** — pin by major, minor, patch, or SHA digest
- **TrueNAS compatible** — automatic digest updates with configurable update policies
- **Signed builds** — provenance attestation via GitHub Actions
- **KISS** — one process per container, stdout logging, no init systems
