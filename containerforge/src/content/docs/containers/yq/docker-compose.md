---
title: Docker-Compose
---


```yaml
name: yq
services:
  yq:
    container_name: yq
    image: ghcr.io/trueforge-org/yq:3.4.3
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
