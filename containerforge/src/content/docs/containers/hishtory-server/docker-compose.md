---
title: Docker-Compose
---


```yaml
name: hishtory-server
services:
  hishtory-server:
    container_name: hishtory-server
    image: ghcr.io/trueforge-org/hishtory-server:0.335
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
