---
title: Docker-Compose
---


```yaml
name: cloudflareddns
services:
  cloudflareddns:
    container_name: cloudflareddns
    image: ghcr.io/trueforge-org/cloudflareddns:3.0.0.4856
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
