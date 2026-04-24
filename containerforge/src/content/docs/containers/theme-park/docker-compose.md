---
title: Docker-Compose
---


```yaml
name: theme-park
services:
  theme-park:
    container_name: theme-park
    environment:
      NGINX_ENTRYPOINT_WORKER_PROCESSES_AUTOTUNE: "1"
    image: ghcr.io/trueforge-org/theme-park:1.22.0
    ports:
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
