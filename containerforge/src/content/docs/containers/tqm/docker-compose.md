---
title: Docker-Compose
---


```yaml
name: tqm
services:
  tqm:
    container_name: tqm
    image: ghcr.io/trueforge-org/tqm:v1.19.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
