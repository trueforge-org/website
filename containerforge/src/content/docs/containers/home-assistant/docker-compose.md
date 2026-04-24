---
title: Docker-Compose
---


```yaml
name: home-assistant
services:
  home-assistant:
    container_name: home-assistant
    environment:
      HOME: /config
      PYTHONUSERBASE: /usr/local
    image: ghcr.io/trueforge-org/home-assistant:2026.4.3
    ports:
      - mode: ingress
        target: 8123
        published: "8123"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
