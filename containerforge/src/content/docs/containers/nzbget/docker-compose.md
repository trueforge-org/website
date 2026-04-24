---
title: Docker-Compose
---


```yaml
name: nzbget
services:
  nzbget:
    container_name: nzbget
    environment:
      NZBGET__PORT: "6789"
    image: ghcr.io/trueforge-org/nzbget:26.1
    ports:
      - mode: ingress
        target: 6789
        published: "6789"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
