---
title: Docker-Compose
---


```yaml
name: pylon
services:
  pylon:
    container_name: pylon
    image: ghcr.io/trueforge-org/pylon:2.11.1
    ports:
      - mode: ingress
        target: 3131
        published: "3131"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
