---
title: Docker-Compose
---


```yaml
name: hedgedoc
services:
  hedgedoc:
    container_name: hedgedoc
    environment:
      NODE_ENV: production
      PUPPETEER_SKIP_DOWNLOAD: "true"
      YARN_CACHE_FOLDER: /tmp/.yarn
    image: ghcr.io/trueforge-org/hedgedoc:1.10.8
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
