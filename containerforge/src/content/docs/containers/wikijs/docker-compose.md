---
title: Docker-Compose
---


```yaml
name: wikijs
services:
  wikijs:
    container_name: wikijs
    environment:
      HOME: /app
      NODE_ENV: production
    image: ghcr.io/trueforge-org/wikijs:2.5.312
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
