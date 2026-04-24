---
title: Docker-Compose
---


```yaml
name: requestrr
services:
  requestrr:
    container_name: requestrr
    environment:
      WEBUI_PORTS: 4545/tcp,4545/udp
    image: ghcr.io/trueforge-org/requestrr:2.1.9
    ports:
      - mode: ingress
        target: 4545
        published: "4545"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
