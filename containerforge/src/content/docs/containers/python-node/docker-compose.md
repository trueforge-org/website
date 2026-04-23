---
title: Docker Compose
---

Example `docker-compose.yaml` for **python-node**:

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
  python-node:
    image: ghcr.io/trueforge-org/python-node:3.14.4
    container_name: python-node
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/tmp/nodehome"

    volumes:
      - ./config:/config
```
