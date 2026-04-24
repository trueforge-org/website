---
title: Docker-Compose
---


```yaml
name: mylar3
services:
  mylar3:
    container_name: mylar3
    image: ghcr.io/trueforge-org/mylar3:0.8.3
    ports:
      - mode: ingress
        target: 8090
        published: "8090"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
