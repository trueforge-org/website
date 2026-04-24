---
title: Docker-Compose
---


```yaml
name: jellyseerr
services:
  jellyseerr:
    container_name: jellyseerr
    image: ghcr.io/trueforge-org/jellyseerr:2.7.3
    ports:
      - mode: ingress
        target: 5055
        published: "5055"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
