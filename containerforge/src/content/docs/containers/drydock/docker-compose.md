---
title: Docker-Compose
---


```yaml
name: drydock
services:
  drydock:
    container_name: drydock
    environment:
      DD_LOG_FORMAT: text
      DD_STORE_PATH: /config
      DD_VERSION: $VERSION
      WORKDIR: /app
    image: ghcr.io/trueforge-org/drydock:0.0.17
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
