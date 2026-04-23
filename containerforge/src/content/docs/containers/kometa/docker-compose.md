---
title: Docker Compose
---

Example `docker-compose.yaml` for **kometa**:

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
  kometa:
    image: ghcr.io/trueforge-org/kometa:2.3.1
    container_name: kometa
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/app"
      PYTHONIOENCODING: "utf-8"

    volumes:
      - ./app:/app
      - ./config:/config
```
