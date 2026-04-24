---
title: Docker-Compose
---


```yaml
name: memcache
services:
  memcache:
    container_name: memcache
    image: ghcr.io/trueforge-org/memcache:1.6.24-1build3
    ports:
      - mode: ingress
        target: 11211
        published: "11211"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
