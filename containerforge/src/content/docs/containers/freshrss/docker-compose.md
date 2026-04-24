---
title: Docker-Compose
---


```yaml
name: freshrss
services:
  freshrss:
    container_name: freshrss
    image: ghcr.io/trueforge-org/freshrss:1.28.1
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
