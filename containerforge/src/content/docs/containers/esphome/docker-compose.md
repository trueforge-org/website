---
title: Docker Compose
---

Example `docker-compose.yaml` for **esphome**:

```yaml
version: "3.9"

# Template variables expected from future renderer:
# - SERVICE_NAME: string
# - IMAGE: string
# - CONTAINER_NAME: string (optional)
# - RESTART_POLICY: string (optional, default: unless-stopped)
# - PORTS: list of { host_port, container_port, protocol }
# - ENV: list of { name, value }
# - VOLUMES: list of { host_path, container_path, mode }
#
# This template is intentionally renderer-agnostic and uses simple token markers.

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
