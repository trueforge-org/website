---
title: Docker-Compose
---


```yaml
name: syncthing
services:
  syncthing:
    container_name: syncthing
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/syncthing:2.0.16
    ports:
      - mode: ingress
        target: 8384
        published: "8384"
        protocol: tcp
      - mode: ingress
        target: 21027
        published: "21027"
        protocol: udp
      - mode: ingress
        target: 22000
        published: "22000"
        protocol: tcp
      - mode: ingress
        target: 22000
        published: "22000"
        protocol: udp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
