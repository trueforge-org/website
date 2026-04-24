---
title: Docker-Compose
---


```yaml
name: cops
services:
  cops:
    container_name: cops
    image: ghcr.io/trueforge-org/cops:4.3.1
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
