---
title: Docker-Compose
---


```yaml
name: wud
services:
  wud:
    container_name: wud
    environment:
      VERSION: $VERSION
      WORKDIR: /app
      WUD_LOG_FORMAT: text
      WUD_REGISTRY_CUSTOM_TRUEFORGE_URL: https://oci.trueforge.org
      WUD_WATCHER_local_WATCHBYDEFAULT: "false"
    image: ghcr.io/trueforge-org/wud:8.2.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
