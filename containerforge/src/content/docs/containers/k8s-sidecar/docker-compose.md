---
title: Docker-Compose
---


```yaml
name: k8s-sidecar
services:
  k8s-sidecar:
    container_name: k8s-sidecar
    environment:
      PATH: /app/venv/bin:$PATH
      RELEASE_URL: https://github.com/kiwigrid/k8s-sidecar/archive/refs/tags/${VERSION}.tar.gz
    image: ghcr.io/trueforge-org/k8s-sidecar:2.6.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
