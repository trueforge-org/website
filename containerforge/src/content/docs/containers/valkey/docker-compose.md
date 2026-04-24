---
title: Docker-Compose
---


```yaml
name: valkey
services:
  valkey:
    container_name: valkey
    environment:
      VALKEY_PORT: "6379"
    image: ghcr.io/trueforge-org/valkey:7.2.11
    ports:
      - mode: ingress
        target: 6379
        published: "6379"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
