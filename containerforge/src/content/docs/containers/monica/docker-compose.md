---
title: Docker-Compose
---


```yaml
name: monica
services:
  monica:
    container_name: monica
    environment:
      MEMORY_LIMIT: 512M
    image: ghcr.io/trueforge-org/monica:4.1.2
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
