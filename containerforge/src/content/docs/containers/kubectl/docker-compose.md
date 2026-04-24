---
title: Docker-Compose
---


```yaml
name: kubectl
services:
  kubectl:
    container_name: kubectl
    image: ghcr.io/trueforge-org/kubectl:v1.31.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
