---
title: Docker-Compose
---


```yaml
name: mariadb-client
services:
  mariadb-client:
    container_name: mariadb-client
    image: ghcr.io/trueforge-org/mariadb-client:12.2.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
