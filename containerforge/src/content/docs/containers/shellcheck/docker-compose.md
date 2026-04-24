---
title: Docker-Compose
---


```yaml
name: shellcheck
services:
  shellcheck:
    container_name: shellcheck
    image: ghcr.io/trueforge-org/shellcheck:0.11.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
