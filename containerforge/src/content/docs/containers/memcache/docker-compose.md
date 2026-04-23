---
title: Docker Compose
---

Example `docker-compose.yaml` for **memcache**:

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
  memcache:
    image: ghcr.io/trueforge-org/memcache:1.6.24-1build3
    container_name: memcache
    restart: unless-stopped

    ports:
      - "11211:11211"

    environment: {}

    volumes:
      - ./config:/config
```
