---
title: Docker-Compose
---


```yaml
name: feed2toot
services:
  feed2toot:
    container_name: feed2toot
    environment:
      PYTHONIOENCODING: utf-8
      PYTHONUNBUFFERED: "1"
    image: ghcr.io/trueforge-org/feed2toot:0.17
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
