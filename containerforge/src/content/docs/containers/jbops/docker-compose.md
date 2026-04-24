---
title: Docker-Compose
---


```yaml
name: jbops
services:
  jbops:
    container_name: jbops
    environment:
      JBOPS__SCRIPT_PATH: fun/plexapi_haiku.py
      PLEXAPI_CONFIG_PATH: /config/config.ini
    image: ghcr.io/trueforge-org/jbops:master
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
