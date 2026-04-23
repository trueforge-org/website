---
title: Docker Compose
---

Example `docker-compose.yaml` for **overseerr**:

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
  overseerr:
    image: ghcr.io/trueforge-org/overseerr:1.35.0
    container_name: overseerr
    restart: unless-stopped

    ports:
      - "5055:5055"

    environment:
      NODE_OPTIONS: "--max_old_space_size=2048"

    volumes:
      - ./config:/config
```
