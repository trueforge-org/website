---
title: Docker-Compose
---


```yaml
name: renovate
services:
  renovate:
    container_name: renovate
    image: ghcr.io/trueforge-org/renovate:43.141.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
