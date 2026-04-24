---
title: Docker-Compose
---


```yaml
name: nextcloud-imaginary
services:
  nextcloud-imaginary:
    container_name: nextcloud-imaginary
    environment:
      MALLOC_ARENA_MAX: "2"
    image: ghcr.io/trueforge-org/nextcloud-imaginary:20230401
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
