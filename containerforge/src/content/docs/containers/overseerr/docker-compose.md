---
title: Docker-Compose
---


```yaml
name: overseerr
services:
  overseerr:
    container_name: overseerr
    environment:
      NODE_OPTIONS: --max_old_space_size=2048
    image: ghcr.io/trueforge-org/overseerr:1.35.0
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
