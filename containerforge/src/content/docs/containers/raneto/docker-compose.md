---
title: Docker-Compose
---


```yaml
name: raneto
services:
  raneto:
    container_name: raneto
    environment:
      PORT: "3000"
    image: ghcr.io/trueforge-org/raneto:0.18.1
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
