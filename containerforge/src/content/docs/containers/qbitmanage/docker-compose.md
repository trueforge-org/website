---
title: Docker-Compose
---


```yaml
name: qbitmanage
services:
  qbitmanage:
    container_name: qbitmanage
    image: ghcr.io/trueforge-org/qbitmanage:4.7.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
