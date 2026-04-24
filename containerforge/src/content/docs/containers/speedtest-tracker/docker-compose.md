---
title: Docker-Compose
---


```yaml
name: speedtest-tracker
services:
  speedtest-tracker:
    container_name: speedtest-tracker
    environment:
      HOME: /config
    image: ghcr.io/trueforge-org/speedtest-tracker:1.14.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
