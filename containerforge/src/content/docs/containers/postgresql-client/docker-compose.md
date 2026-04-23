---
title: Docker Compose
---

Example `docker-compose.yaml` for **postgresql-client**:

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
  postgresql-client:
    image: ghcr.io/trueforge-org/postgresql-client:9.6.24
    container_name: postgresql-client
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
