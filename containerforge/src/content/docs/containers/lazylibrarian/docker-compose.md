---
title: Docker-Compose
---


```yaml
name: lazylibrarian
services:
  lazylibrarian:
    container_name: lazylibrarian
    image: ghcr.io/trueforge-org/lazylibrarian:07aba984
    ports:
      - mode: ingress
        target: 5299
        published: "5299"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
