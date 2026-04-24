---
title: Docker-Compose
---


```yaml
name: emby
services:
  emby:
    container_name: emby
    environment:
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
    image: ghcr.io/trueforge-org/emby:4.10.0.10
    ports:
      - mode: ingress
        target: 8096
        published: "8096"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
