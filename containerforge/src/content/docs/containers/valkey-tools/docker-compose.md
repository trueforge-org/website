---
title: Docker-Compose
---


```yaml
name: valkey-tools
services:
  valkey-tools:
    container_name: valkey-tools
    image: ghcr.io/trueforge-org/valkey-tools:1.1.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
