---
title: Docker-Compose
---


```yaml
name: webhook
services:
  webhook:
    container_name: webhook
    environment:
      WEBHOOK__PORT: "9000"
      WEBHOOK__URLPREFIX: hooks
    image: ghcr.io/trueforge-org/webhook:2.8.3
    ports:
      - mode: ingress
        target: 9000
        published: "9000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
