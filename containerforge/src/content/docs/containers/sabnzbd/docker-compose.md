---
title: Docker-Compose
---


```yaml
name: sabnzbd
services:
  sabnzbd:
    container_name: sabnzbd
    environment:
      SABNZBD__ADDRESS: '[::]'
      SABNZBD__PORT: "8080"
    image: ghcr.io/trueforge-org/sabnzbd:4.5.5
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
