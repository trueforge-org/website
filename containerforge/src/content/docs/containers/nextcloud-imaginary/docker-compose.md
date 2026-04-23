---
title: Docker Compose
---

Example `docker-compose.yaml` for **nextcloud-imaginary**:

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
  nextcloud-imaginary:
    image: ghcr.io/trueforge-org/nextcloud-imaginary:20230401
    container_name: nextcloud-imaginary
    restart: unless-stopped

    ports: []

    environment:
      MALLOC_ARENA_MAX: "2"

    volumes:
      - ./config:/config
```
