---
title: Docker-Compose
---


```yaml
name: xbackbone
services:
  xbackbone:
    container_name: xbackbone
    image: ghcr.io/trueforge-org/xbackbone:3.8.1
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
