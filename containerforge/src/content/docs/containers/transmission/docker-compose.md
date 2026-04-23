---
title: Docker Compose
---

Example `docker-compose.yaml` for **transmission**:

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
  transmission:
    image: ghcr.io/trueforge-org/transmission:4.0.5-1build5
    container_name: transmission
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/config"
      TRANSMISSION_WEB_HOME: "/usr/share/transmission/public_html"
      XDG_CONFIG_HOME: "/config"
      XDG_DATA_HOME: "/config"

    volumes:
      - ./config:/config
```
