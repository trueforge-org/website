---
title: Docker-Compose
---


```yaml
name: hytale
services:
  hytale:
    container_name: hytale
    image: ghcr.io/trueforge-org/hytale:1.0.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
