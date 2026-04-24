---
title: Docker-Compose
---


```yaml
name: duplicacy
services:
  duplicacy:
    container_name: duplicacy
    image: ghcr.io/trueforge-org/duplicacy:1.8.0
    ports:
      - mode: ingress
        target: 3875
        published: "3875"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: cache
        target: /cache
      - type: bind
        source: config
        target: /config
      - type: bind
        source: logs
        target: /logs
```
