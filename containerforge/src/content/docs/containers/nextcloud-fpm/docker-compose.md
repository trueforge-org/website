---
title: Docker-Compose
---


```yaml
name: nextcloud-fpm
services:
  nextcloud-fpm:
    container_name: nextcloud-fpm
    image: ghcr.io/trueforge-org/nextcloud-fpm:33.0.2-fpm
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
