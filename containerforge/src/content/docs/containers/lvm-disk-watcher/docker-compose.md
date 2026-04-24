---
title: Docker-Compose
---


```yaml
name: lvm-disk-watcher
services:
  lvm-disk-watcher:
    container_name: lvm-disk-watcher
    image: ghcr.io/trueforge-org/lvm-disk-watcher:1.1.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
