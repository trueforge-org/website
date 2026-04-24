---
title: Docker-Compose
---


```yaml
name: jellyfin
services:
  jellyfin:
    container_name: jellyfin
    environment:
      MALLOC_TRIM_THRESHOLD_: "131072"
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
    image: ghcr.io/trueforge-org/jellyfin:10.11.8
    ports:
      - mode: ingress
        target: 8096
        published: "8096"
        protocol: tcp
      - mode: ingress
        target: 8920
        published: "8920"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
