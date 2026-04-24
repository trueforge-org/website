---
title: Docker-Compose
---


```yaml
name: nextcloud-notify-push
services:
  nextcloud-notify-push:
    container_name: nextcloud-notify-push
    image: ghcr.io/trueforge-org/nextcloud-notify-push:1.3.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
