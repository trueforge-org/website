---
title: Docker-Compose
---


```yaml
name: unpackerr
services:
  unpackerr:
    container_name: unpackerr
    image: ghcr.io/trueforge-org/unpackerr:0.15.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
