---
title: Docker-Compose
---


```yaml
name: lychee
services:
  lychee:
    container_name: lychee
    image: ghcr.io/trueforge-org/lychee:6.10.4
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
