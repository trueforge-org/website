---
title: Docker-Compose
---


```yaml
name: ubuntu
services:
  ubuntu:
    container_name: ubuntu
    environment:
      "": Enable
      DEBIAN_FRONTEND: noninteractive
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
      detection: of
      dotnet: running
      in: a
    image: ghcr.io/trueforge-org/ubuntu:24.04
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
