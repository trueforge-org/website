---
title: Docker Compose
---

Example `docker-compose.yaml` for **home-assistant**:

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
  home-assistant:
    image: ghcr.io/trueforge-org/home-assistant:2026.4.3
    container_name: home-assistant
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/config"
      PYTHONUSERBASE: "/usr/local"

    volumes:
      - ./config:/config
```
