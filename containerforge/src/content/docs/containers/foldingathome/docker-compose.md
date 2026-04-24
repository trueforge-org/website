---
title: Docker-Compose
---


```yaml
name: foldingathome
services:
  foldingathome:
    container_name: foldingathome
    environment:
      DEBIAN_FRONTEND: noninteractive
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
    image: ghcr.io/trueforge-org/foldingathome:8.4.9
    ports:
      - mode: ingress
        target: 7396
        published: "7396"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
