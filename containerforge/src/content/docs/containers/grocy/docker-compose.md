---
title: Docker-Compose
---


```yaml
name: grocy
services:
  grocy:
    container_name: grocy
    image: ghcr.io/trueforge-org/grocy:4.6.0
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
