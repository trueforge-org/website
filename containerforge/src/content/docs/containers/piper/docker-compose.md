---
title: Docker-Compose
---


```yaml
name: piper
services:
  piper:
    container_name: piper
    image: ghcr.io/trueforge-org/piper:2.2.2
    ports:
      - mode: ingress
        target: 10200
        published: "10200"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
