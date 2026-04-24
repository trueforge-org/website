---
title: Docker-Compose
---


```yaml
name: stash
services:
  stash:
    container_name: stash
    image: ghcr.io/trueforge-org/stash:0.31.1
    ports:
      - mode: ingress
        target: 9999
        published: "9999"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
