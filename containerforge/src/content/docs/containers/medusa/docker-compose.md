---
title: Docker-Compose
---


```yaml
name: medusa
services:
  medusa:
    container_name: medusa
    environment:
      LANG: en_US.UTF-8
      PATH: /app/venv/bin:$PATH
    image: ghcr.io/trueforge-org/medusa:1.0.25
    ports:
      - mode: ingress
        target: 8081
        published: "8081"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
