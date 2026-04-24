---
title: Docker-Compose
---


```yaml
name: kometa
services:
  kometa:
    container_name: kometa
    environment:
      HOME: /app
      PYTHONIOENCODING: utf-8
    image: ghcr.io/trueforge-org/kometa:2.3.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: app
        target: /app
      - type: bind
        source: config
        target: /config
```
