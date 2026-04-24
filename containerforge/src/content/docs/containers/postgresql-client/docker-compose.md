---
title: Docker-Compose
---


```yaml
name: postgresql-client
services:
  postgresql-client:
    container_name: postgresql-client
    image: ghcr.io/trueforge-org/postgresql-client:9.6.24
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
