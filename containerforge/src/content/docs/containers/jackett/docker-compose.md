---
title: Docker-Compose
---


```yaml
name: jackett
services:
  jackett:
    container_name: jackett
    image: ghcr.io/trueforge-org/jackett:v0.24.1736
    ports:
      - mode: ingress
        target: 9117
        published: "9117"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
