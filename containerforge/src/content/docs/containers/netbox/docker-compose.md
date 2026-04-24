---
title: Docker-Compose
---


```yaml
name: netbox
services:
  netbox:
    container_name: netbox
    image: ghcr.io/trueforge-org/netbox:4.5.8
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
