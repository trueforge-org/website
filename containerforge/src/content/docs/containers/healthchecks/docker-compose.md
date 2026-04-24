---
title: Docker-Compose
---


```yaml
name: healthchecks
services:
  healthchecks:
    container_name: healthchecks
    environment:
      PYTHONUNBUFFERED: "1"
    image: ghcr.io/trueforge-org/healthchecks:4.1.1
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
