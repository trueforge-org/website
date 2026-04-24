---
title: Docker-Compose
---


```yaml
name: go-yq
services:
  go-yq:
    container_name: go-yq
    image: ghcr.io/trueforge-org/go-yq:4.53.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
