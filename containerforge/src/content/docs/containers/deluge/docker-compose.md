---
title: Docker-Compose
---


```yaml
name: deluge
services:
  deluge:
    container_name: deluge
    environment:
      DELUGE_BIN: deluged
      PYTHON_EGG_CACHE: /config/plugins/.python-eggs
      XDG_CONFIG_HOME: /config
    image: ghcr.io/trueforge-org/deluge:2.2.0
    ports:
      - mode: ingress
        target: 58846
        published: "58846"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
