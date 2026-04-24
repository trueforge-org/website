---
title: Docker-Compose
---


```yaml
name: duckdns
services:
  duckdns:
    container_name: duckdns
    image: ghcr.io/trueforge-org/duckdns:95e5988b
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
