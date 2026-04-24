---
title: Docker-Compose
---


```yaml
name: snipe-it
services:
  snipe-it:
    container_name: snipe-it
    image: ghcr.io/trueforge-org/snipe-it:8.4.1
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
