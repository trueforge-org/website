---
title: Docker Compose
sidebar:
  order: 1
---

This page covers the conventions that apply to **every** ContainerForge image when running it with [Docker Compose](https://docs.docker.com/compose/). For an exact, copy-pasteable Compose snippet tailored to a specific application — including its required volumes, ports, and environment variables — see that container's own page under [Containers](/containers/).

:::tip
Every container in our catalog has its own documentation page with a ready-to-use Compose example. Always start there and use this page as a reference for the conventions those snippets rely on.
:::

## Basic Usage

```yaml
services:
  home-assistant:
    image: ghcr.io/trueforge-org/home-assistant:2025.5.1
    container_name: home-assistant
    user: 1000:1000 # The data volume permissions must match this user:group
    read_only: true # May require mounting in additional dirs as tmpfs
    tmpfs:
      - /tmp:rw
```

## Configuration Volume

For applications requiring persistent configuration data, the configuration volume is hardcoded to `/config` within the container, whenever reasonably possible. In most cases, this path cannot be changed.

However, some applications might require other paths.

## Passing Arguments

Some applications only allow certain configurations via command-line arguments rather than environment variables. Specify the desired arguments like so:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    command:
      - --port
      - "8080"
```

## Per-Container Examples

The snippet at the top of this page is intentionally generic. Each application has its own requirements — required environment variables, ports to expose, volumes to mount, sidecar databases, etc.

Browse the [Containers](/containers/) section and open the page for the image you want to run. Every container page includes:

- A working `docker compose` example
- The list of supported environment variables
- Volume paths and recommended bind-mount layout
- Any app-specific notes (read-only root FS support, required capabilities, …)

Use those snippets as your starting point and apply the conventions documented on this page (user, `/config` volume, argument passing) as needed.
