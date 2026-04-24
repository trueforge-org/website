---
title: Docker-Compose
---


```yaml
name: nginx
services:
  nginx:
    container_name: nginx
    environment:
      NGINX_ENTRYPOINT_WORKER_PROCESSES_AUTOTUNE: "1"
    image: ghcr.io/trueforge-org/nginx:1.24.0-2ubuntu7.6
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
