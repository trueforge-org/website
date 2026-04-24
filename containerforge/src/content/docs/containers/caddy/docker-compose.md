---
title: Docker-Compose
---


```yaml
name: caddy
services:
  caddy:
    container_name: caddy
    image: ghcr.io/trueforge-org/caddy:2.11.2
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
      - mode: ingress
        target: 8443
        published: "8443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
