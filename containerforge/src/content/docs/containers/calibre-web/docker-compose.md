---
title: Docker-Compose
---


```yaml
name: calibre-web
services:
  calibre-web:
    container_name: calibre-web
    environment:
      QTWEBENGINE_CHROMIUM_FLAGS: --no-sandbox
    image: ghcr.io/trueforge-org/calibre-web:0.6.26
    ports:
      - mode: ingress
        target: 8083
        published: "8083"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
