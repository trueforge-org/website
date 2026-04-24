---
title: Docker-Compose
---


```yaml
name: diskover
services:
  diskover:
    container_name: diskover
    environment:
      DATABASE: /config/diskoverdb.sqlite3
      DISKOVERDIR: /config/diskover.conf.d/diskover/
      ES_HOST: elasticsearch
    image: ghcr.io/trueforge-org/diskover:2.3.5
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
