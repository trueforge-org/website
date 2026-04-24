---
title: Docker-Compose
---


```yaml
name: pyload-ng
services:
  pyload-ng:
    container_name: pyload-ng
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/pyload-ng:0.5.0b3.dev93
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
