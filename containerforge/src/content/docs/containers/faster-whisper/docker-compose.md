---
title: Docker-Compose
---


```yaml
name: faster-whisper
services:
  faster-whisper:
    container_name: faster-whisper
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/faster-whisper:3.0.2
    ports:
      - mode: ingress
        target: 10300
        published: "10300"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
