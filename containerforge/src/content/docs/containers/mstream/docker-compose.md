---
title: Docker-Compose
---


```yaml
name: mstream
services:
  mstream:
    container_name: mstream
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/mstream:6.5.1
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
