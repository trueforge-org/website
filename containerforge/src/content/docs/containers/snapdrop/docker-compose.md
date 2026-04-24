---
title: Docker-Compose
---


```yaml
name: snapdrop
services:
  snapdrop:
    container_name: snapdrop
    environment:
      HOME: /app
      NODE_ENV: production
    image: ghcr.io/trueforge-org/snapdrop:b8b78cc2
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        target: 443
        published: "443"
        protocol: tcp
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
