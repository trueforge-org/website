---
title: Docker Compose
---

Example `docker-compose.yaml` for **duplicacy**:

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
  duplicacy:
    image: ghcr.io/trueforge-org/duplicacy:1.8.0
    container_name: duplicacy
    restart: unless-stopped

    ports:
      - "3875:3875"

    environment: {}

    volumes:
      - ./cache:/cache
      - ./config:/config
      - ./logs:/logs
```
