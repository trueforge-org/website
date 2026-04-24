---
title: Docker-Compose
---


```yaml
name: openvscode-server
services:
  openvscode-server:
    container_name: openvscode-server
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/openvscode-server:1.105.1
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
