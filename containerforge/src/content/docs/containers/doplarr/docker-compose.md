---
title: Docker-Compose
---


```yaml
name: doplarr
services:
  doplarr:
    container_name: doplarr
    image: ghcr.io/trueforge-org/doplarr:3.7.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
