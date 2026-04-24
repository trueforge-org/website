---
title: Docker-Compose
---


```yaml
name: mongosh
services:
  mongosh:
    container_name: mongosh
    image: ghcr.io/trueforge-org/mongosh:2.8.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
