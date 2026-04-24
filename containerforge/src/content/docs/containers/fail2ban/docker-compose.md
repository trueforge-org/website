---
title: Docker-Compose
---


```yaml
name: fail2ban
services:
  fail2ban:
    container_name: fail2ban
    image: ghcr.io/trueforge-org/fail2ban:1.1.0-r2-ls29
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
