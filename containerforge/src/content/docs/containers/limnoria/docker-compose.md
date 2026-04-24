---
title: Docker-Compose
---


```yaml
name: limnoria
services:
  limnoria:
    container_name: limnoria
    image: ghcr.io/trueforge-org/limnoria:2025.11.2
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
