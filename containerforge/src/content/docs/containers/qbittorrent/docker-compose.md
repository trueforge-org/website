---
title: Docker-Compose
---


```yaml
name: qbittorrent
services:
  qbittorrent:
    container_name: qbittorrent
    environment:
      HOME: /config
      QBT_CONFIRM_LEGAL_NOTICE: "1"
      XDG_CONFIG_HOME: /config
      XDG_DATA_HOME: /config
    image: ghcr.io/trueforge-org/qbittorrent:5.1.4
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
