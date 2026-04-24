---
title: Docker-Compose
---


```yaml
name: watchtower
services:
  watchtower:
    container_name: watchtower
    environment:
      WATCHTOWER_LABEL_ENABLE: "true"
      WORKDIR: /app
    image: ghcr.io/trueforge-org/watchtower:v1.7.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
