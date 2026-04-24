---
title: Docker-Compose
---


```yaml
name: netbootxyz
services:
  netbootxyz:
    container_name: netbootxyz
    image: ghcr.io/trueforge-org/netbootxyz:0.7.6
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
