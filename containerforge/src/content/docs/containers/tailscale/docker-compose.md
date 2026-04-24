---
title: Docker-Compose
---


```yaml
name: tailscale
services:
  tailscale:
    container_name: tailscale
    image: ghcr.io/trueforge-org/tailscale:v1.96.5
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
      - type: bind
        source: tailscale
        target: /var/lib/tailscale
```
