---
title: Docker-Compose
---


```yaml
name: ddclient
services:
  ddclient:
    container_name: ddclient
    image: ghcr.io/trueforge-org/ddclient:4.0.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
