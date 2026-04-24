---
title: Docker-Compose
---


```yaml
name: node
services:
  node:
    container_name: node
    environment:
      HOME: /app/nodehome
    image: ghcr.io/trueforge-org/node:24.15.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
