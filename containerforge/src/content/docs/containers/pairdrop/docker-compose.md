---
title: Docker-Compose
---


```yaml
name: pairdrop
services:
  pairdrop:
    container_name: pairdrop
    environment:
      NODE_ENV: production
    image: ghcr.io/trueforge-org/pairdrop:1.11.2
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
