---
title: Docker Compose
---

Example `docker-compose.yaml` for **jbops**:

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
  jbops:
    image: ghcr.io/trueforge-org/jbops:master
    container_name: jbops
    restart: unless-stopped

    ports: []

    environment:
      JBOPS__SCRIPT_PATH: "fun/plexapi_haiku.py"
      PLEXAPI_CONFIG_PATH: "/config/config.ini"

    volumes:
      - ./config:/config
```
