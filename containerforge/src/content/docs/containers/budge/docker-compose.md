---
title: Docker-Compose
---


```yaml
name: budge
services:
  budge:
    container_name: budge
    environment:
      BUDGE_DATABASE: /config/budge.db
      S6_STAGE2_HOOK: /init-hook
    image: ghcr.io/trueforge-org/budge:0.0.9
    ports:
      - mode: ingress
        target: 5000
        published: "5000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
