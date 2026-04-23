---
title: Docker Compose
---

Example `docker-compose.yaml` for **netbootxyz**:

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
  netbootxyz:
    image: ghcr.io/trueforge-org/netbootxyz:0.7.6
    container_name: netbootxyz
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment: {}

    volumes:
      - ./config:/config
```
