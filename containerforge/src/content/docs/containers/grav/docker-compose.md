---
title: Docker-Compose
---


```yaml
name: grav
services:
  grav:
    container_name: grav
    image: ghcr.io/trueforge-org/grav:1.7.49.5
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
