---
title: Docker-Compose
---


```yaml
name: smokeping
services:
  smokeping:
    container_name: smokeping
    image: ghcr.io/trueforge-org/smokeping:2.9.0-r0-ls164
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
      - type: bind
        source: data
        target: /data
```
