---
title: Docker-Compose
---


```yaml
name: resilio-sync
services:
  resilio-sync:
    container_name: resilio-sync
    image: ghcr.io/trueforge-org/resilio-sync:3.1.2.1076
    ports:
      - mode: ingress
        target: 8888
        published: "8888"
        protocol: tcp
      - mode: ingress
        target: 55555
        published: "55555"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
      - type: bind
        source: sync
        target: /sync
```
