---
title: Docker-Compose
---


```yaml
name: deemix
services:
  deemix:
    container_name: deemix
    image: ghcr.io/trueforge-org/deemix:0.0.1
    ports:
      - mode: ingress
        target: 6595
        published: "6595"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
