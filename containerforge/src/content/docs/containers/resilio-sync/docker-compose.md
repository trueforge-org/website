---
title: Docker Compose
---

Example `docker-compose.yaml` for **resilio-sync**:

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
  resilio-sync:
    image: ghcr.io/trueforge-org/resilio-sync:3.1.2.1076
    container_name: resilio-sync
    restart: unless-stopped

    ports:
      - "8888:8888"
      - "55555:55555"

    environment: {}

    volumes:
      - ./config:/config
      - ./sync:/sync
```
