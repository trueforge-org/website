---
title: Docker Compose
---

Example `docker-compose.yaml` for **esphome**:

```yaml
version: "3.9"

services:
  esphome:
    image: ghcr.io/trueforge-org/esphome:2026.4.2
    container_name: esphome
    restart: unless-stopped

    ports:
      - "6052:6052"

    environment:
      ESPHOME_BUILD_PATH: "/cache/build"
      ESPHOME_DATA_DIR: "/cache/data"
      HOME: "/config"
      PLATFORMIO_CORE_DIR: "/cache/pio"

    volumes:
      - ./config:/config
```
