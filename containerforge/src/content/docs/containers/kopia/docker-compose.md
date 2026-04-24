---
title: Docker-Compose
---


```yaml
name: kopia
services:
  kopia:
    container_name: kopia
    environment:
      KOPIA_CACHE_DIRECTORY: /config/cache
      KOPIA_CHECK_FOR_UPDATES: "false"
      KOPIA_CONFIG_PATH: /config/repository.config
      KOPIA_LOG_DIR: /config/logs
      KOPIA_PERSIST_CREDENTIALS_ON_CONNECT: "false"
      KOPIA_WEB_ENABLED: "true"
      KOPIA_WEB_PORT: "51515"
    image: ghcr.io/trueforge-org/kopia:v0.22.3
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
