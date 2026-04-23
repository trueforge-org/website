---
title: Docker Compose
---

Example `docker-compose.yaml` for **qbittorrent**:

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
  qbittorrent:
    image: ghcr.io/trueforge-org/qbittorrent:5.1.4
    container_name: qbittorrent
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      HOME: "/config"
      QBT_CONFIRM_LEGAL_NOTICE: "1"
      XDG_CONFIG_HOME: "/config"
      XDG_DATA_HOME: "/config"

    volumes:
      - ./config:/config
```
