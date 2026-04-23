---
title: Docker Compose
---

Example `docker-compose.yaml` for **calibre-web**:

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
  calibre-web:
    image: ghcr.io/trueforge-org/calibre-web:0.6.26
    container_name: calibre-web
    restart: unless-stopped

    ports:
      - "8083:8083"

    environment:
      QTWEBENGINE_CHROMIUM_FLAGS: "--no-sandbox"

    volumes:
      - ./config:/config
```
