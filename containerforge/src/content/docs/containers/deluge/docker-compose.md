---
title: Docker Compose
---

Example `docker-compose.yaml` for **deluge**:

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
  deluge:
    image: ghcr.io/trueforge-org/deluge:2.2.0
    container_name: deluge
    restart: unless-stopped

    ports: []

    environment:
      DELUGE_BIN: "deluged"
      PYTHON_EGG_CACHE: "/config/plugins/.python-eggs"
      XDG_CONFIG_HOME: "/config"

    volumes:
      - ./config:/config
```
