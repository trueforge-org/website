---
title: Docker-Compose
---


```yaml
name: qui
services:
  qui:
    container_name: qui
    environment:
      WEBUI_PORTS: 7476/tcp,7476/udp
    image: ghcr.io/trueforge-org/qui:1.17.0
    ports:
      - mode: ingress
        target: 7476
        published: "7476"
        protocol: tcp
      - mode: ingress
        target: 7476
        published: "7476"
        protocol: udp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
