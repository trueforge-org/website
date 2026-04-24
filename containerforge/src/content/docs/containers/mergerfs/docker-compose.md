---
title: Docker-Compose
---


```yaml
name: mergerfs
services:
  mergerfs:
    container_name: mergerfs
    image: ghcr.io/trueforge-org/mergerfs:2.41.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
