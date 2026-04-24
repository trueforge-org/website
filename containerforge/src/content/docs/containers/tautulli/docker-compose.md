---
title: Docker-Compose
---


```yaml
name: tautulli
services:
  tautulli:
    container_name: tautulli
    environment:
      TAUTULLI_DOCKER: "True"
    image: ghcr.io/trueforge-org/tautulli:2.17.0
    ports:
      - mode: ingress
        target: 8181
        published: "8181"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
