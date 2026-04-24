---
title: Docker-Compose
---


```yaml
name: synclounge
services:
  synclounge:
    container_name: synclounge
    environment:
      HOME: /app
    image: ghcr.io/trueforge-org/synclounge:5.2.35
    ports:
      - mode: ingress
        target: 8088
        published: "8088"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
