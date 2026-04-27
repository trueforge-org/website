---
title: Updating with Watchtower
sidebar:
  order: 13
---

[Watchtower](https://containrrr.dev/watchtower/) polls a registry and restarts running containers when a newer image is published. It is the simplest "just keep me current" option — and the trade-off is that updates happen without review.

## Basic Setup

```yaml
services:
  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      WATCHTOWER_CLEANUP: "true"
      WATCHTOWER_POLL_INTERVAL: "3600"
    restart: unless-stopped
```

## Opting Containers In or Out

By default Watchtower watches every running container. To limit it, set:

```yaml
environment:
  WATCHTOWER_LABEL_ENABLE: "true"
```

…and label the containers you want updated:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    labels:
      - com.centurylinklabs.watchtower.enable=true
```

## Tag Selection Matters

Watchtower updates the tag you deployed. Pair it with our [tag formats](/guides/tag-immutability/) so you only receive the level of change you want:

| Tag | Result |
|---|---|
| `rolling` | Every rebuild |
| `Major` | Patch + minor + digest updates |
| `Major.Minor` | Patch + digest updates |
| `Major.Minor.Patch` | Digest updates only |

:::caution
Watchtower performs unattended updates. For production systems prefer [Renovate](/guides/renovate/) so changes go through review.
:::
