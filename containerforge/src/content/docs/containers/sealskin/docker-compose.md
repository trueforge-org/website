---
title: Docker-Compose
---


```yaml
name: sealskin
services:
  sealskin:
    container_name: sealskin
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/sealskin:0.1.37
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
      - mode: ingress
        target: 8443
        published: "8443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
      - type: bind
        source: storage
        target: /storage
```
