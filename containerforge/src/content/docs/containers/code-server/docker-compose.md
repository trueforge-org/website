---
title: Docker-Compose
---


```yaml
name: code-server
services:
  code-server:
    container_name: code-server
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/code-server:4.117.0
    ports:
      - mode: ingress
        target: 8443
        published: "8443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
