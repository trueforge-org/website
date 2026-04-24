---
title: Docker-Compose
---


```yaml
name: babybuddy
services:
  babybuddy:
    container_name: babybuddy
    environment:
      S6_STAGE2_HOOK: /init-hook
    image: ghcr.io/trueforge-org/babybuddy:2.8.0
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
