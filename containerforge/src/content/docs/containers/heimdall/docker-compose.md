---
title: Docker-Compose
---


```yaml
name: heimdall
services:
  heimdall:
    container_name: heimdall
    image: ghcr.io/trueforge-org/heimdall:2.7.6
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
