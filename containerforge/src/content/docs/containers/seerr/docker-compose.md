---
title: Docker-Compose
---


```yaml
name: seerr
services:
  seerr:
    container_name: seerr
    environment:
      NODE_ENV: production
      NODE_OPTIONS: --max_old_space_size=2048
      PATH: $PNPM_HOME:$PATH
      PNPM_HOME: /pnpm
    image: ghcr.io/trueforge-org/seerr:3.2.0
    ports:
      - mode: ingress
        target: 5055
        published: "5055"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
