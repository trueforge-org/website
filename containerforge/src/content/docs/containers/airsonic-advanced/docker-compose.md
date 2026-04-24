---
title: Docker-Compose
---


```yaml
name: airsonic-advanced
services:
  airsonic-advanced:
    container_name: airsonic-advanced
    environment:
      AIRSONIC_ADVANCED_HOME: /app
      AIRSONIC_ADVANCED_SETTINGS: /config
      LANG: C.UTF-8
    image: ghcr.io/trueforge-org/airsonic-advanced:11.1.4
    ports:
      - mode: ingress
        target: 4040
        published: "4040"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
