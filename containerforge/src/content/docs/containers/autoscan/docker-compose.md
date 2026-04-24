---
title: Docker-Compose
---


```yaml
name: autoscan
services:
  autoscan:
    container_name: autoscan
    environment:
      IMAGE_STATS: ${IMAGE_STATS}
      WEBUI_PORTS: 3030/tcp,3030/udp
    image: ghcr.io/trueforge-org/autoscan:1.4.0
    ports:
      - mode: ingress
        target: 3030
        published: "3030"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
