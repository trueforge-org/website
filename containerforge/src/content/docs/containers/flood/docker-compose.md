---
title: Docker-Compose
---


```yaml
name: flood
services:
  flood:
    container_name: flood
    image: ghcr.io/trueforge-org/flood:4.13.9
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
      - mode: ingress
        target: 4500
        published: "4500"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
