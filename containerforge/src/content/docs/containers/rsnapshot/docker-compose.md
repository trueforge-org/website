---
title: Docker-Compose
---


```yaml
name: rsnapshot
services:
  rsnapshot:
    container_name: rsnapshot
    image: ghcr.io/trueforge-org/rsnapshot:1.4.5-r0-ls152
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
