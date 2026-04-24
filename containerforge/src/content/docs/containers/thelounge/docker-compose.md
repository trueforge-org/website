---
title: Docker-Compose
---


```yaml
name: thelounge
services:
  thelounge:
    container_name: thelounge
    environment:
      THELOUNGE_HOME: /config
    image: ghcr.io/trueforge-org/thelounge:4.4.3
    ports:
      - mode: ingress
        target: 9000
        published: "9000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
