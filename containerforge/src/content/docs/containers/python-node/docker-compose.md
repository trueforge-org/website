---
title: Docker-Compose
---


```yaml
name: python-node
services:
  python-node:
    container_name: python-node
    environment:
      HOME: /tmp/nodehome
    image: ghcr.io/trueforge-org/python-node:3.14.4
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
