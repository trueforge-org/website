---
title: Docker-Compose
---


```yaml
name: htpcmanager
services:
  htpcmanager:
    container_name: htpcmanager
    image: ghcr.io/trueforge-org/htpcmanager:26a641bf
    ports:
      - mode: ingress
        target: 8085
        published: "8085"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
