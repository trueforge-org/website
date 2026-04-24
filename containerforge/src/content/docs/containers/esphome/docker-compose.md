---
title: Docker-Compose
---


```yaml
name: esphome
services:
  esphome:
    container_name: esphome
    environment:
      ESPHOME_BUILD_PATH: /cache/build
      ESPHOME_DATA_DIR: /cache/data
      HOME: /config
      PLATFORMIO_CORE_DIR: /cache/pio
    image: ghcr.io/trueforge-org/esphome:2026.4.2
    ports:
      - mode: ingress
        target: 6052
        published: "6052"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
