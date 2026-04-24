---
title: Docker-Compose
---


```yaml
name: scratch
services:
  scratch:
    container_name: scratch
    image: ghcr.io/trueforge-org/scratch:1.0.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
