---
title: Docker Compose
sidebar:
  order: 1
---

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
