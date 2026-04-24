---
title: Docker-Compose
---


```yaml
name: apprise-api
services:
  apprise-api:
    container_name: apprise-api
    environment:
      APPRISE_ATTACH_DIR: /attachments
      APPRISE_ATTACH_SIZE: "0"
      APPRISE_CONFIG_DIR: /config
    image: ghcr.io/trueforge-org/apprise-api:1.3.3
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
