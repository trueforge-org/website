---
title: Docker-Compose
---


```yaml
name: changedetection
services:
  changedetection:
    container_name: changedetection
    environment:
      PYTHONUNBUFFERED: "1"
    image: ghcr.io/trueforge-org/changedetection:0.54.10
    ports:
      - mode: ingress
        target: 5000
        published: "5000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
