---
title: Docker-Compose
---


```yaml
name: steamcmd
services:
  steamcmd:
    container_name: steamcmd
    image: ghcr.io/trueforge-org/steamcmd:20180105-5
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
