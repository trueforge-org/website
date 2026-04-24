---
title: Docker-Compose
---


```yaml
name: sickgear
services:
  sickgear:
    container_name: sickgear
    environment:
      PYTHONIOENCODING: UTF-8
    image: ghcr.io/trueforge-org/sickgear:release_3.34.5
    ports:
      - mode: ingress
        target: 8081
        published: "8081"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
