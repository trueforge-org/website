---
title: Docker-Compose
---


```yaml
name: sickchill
services:
  sickchill:
    container_name: sickchill
    environment:
      HOME: /config
      PYTHONIOENCODING: UTF-8
    image: ghcr.io/trueforge-org/sickchill:2024.3.1
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
