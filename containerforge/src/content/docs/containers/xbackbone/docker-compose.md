---
title: Docker Compose
---

Example `docker-compose.yaml` for **xbackbone**:

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
  xbackbone:
    image: ghcr.io/trueforge-org/xbackbone:3.8.1
    container_name: xbackbone
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
