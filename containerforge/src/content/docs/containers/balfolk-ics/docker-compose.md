---
title: Docker-Compose
---


```yaml
name: balfolk-ics
services:
  balfolk-ics:
    container_name: balfolk-ics
    image: ghcr.io/trueforge-org/balfolk-ics:0.0.5
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
