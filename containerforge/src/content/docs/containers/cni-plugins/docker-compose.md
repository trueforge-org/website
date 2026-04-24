---
title: Docker-Compose
---


```yaml
name: cni-plugins
services:
  cni-plugins:
    container_name: cni-plugins
    environment:
      CNI_BIN_DIR: /host/opt/cni/bin
      DEBIAN_FRONTEND: noninteractive
    image: ghcr.io/trueforge-org/cni-plugins:v1.9.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
