---
title: Docker-Compose
---


```yaml
name: habridge
services:
  habridge:
    container_name: habridge
    image: ghcr.io/trueforge-org/habridge:5.4.1
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
