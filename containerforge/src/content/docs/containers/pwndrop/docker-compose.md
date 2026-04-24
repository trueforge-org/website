---
title: Docker-Compose
---


```yaml
name: pwndrop
services:
  pwndrop:
    container_name: pwndrop
    image: ghcr.io/trueforge-org/pwndrop:1.0.1
    ports:
      - mode: ingress
        target: 4443
        published: "4443"
        protocol: tcp
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
