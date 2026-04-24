---
title: Docker-Compose
---


```yaml
name: irqbalance
services:
  irqbalance:
    container_name: irqbalance
    image: ghcr.io/trueforge-org/irqbalance:1.9.4-r1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
