---
title: Docker Compose
---

Example `docker-compose.yaml` for **duckdns**:

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
  duckdns:
    image: ghcr.io/trueforge-org/duckdns:95e5988b
    container_name: duckdns
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
