---
title: Docker-Compose
---


```yaml
name: transmission
services:
  transmission:
    container_name: transmission
    environment:
      HOME: /config
      TRANSMISSION_WEB_HOME: /usr/share/transmission/public_html
      XDG_CONFIG_HOME: /config
      XDG_DATA_HOME: /config
    image: ghcr.io/trueforge-org/transmission:4.0.5-1build5
    ports:
      - mode: ingress
        target: 9091
        published: "9091"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
