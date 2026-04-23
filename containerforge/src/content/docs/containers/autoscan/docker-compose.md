---
title: Docker Compose
---

Example `docker-compose.yaml` for **autoscan**:

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
  autoscan:
    image: ghcr.io/trueforge-org/autoscan:1.4.0
    container_name: autoscan
    restart: unless-stopped

    ports:
      - "3030:3030"

    environment:
      IMAGE_STATS: "${IMAGE_STATS}"
      WEBUI_PORTS: "3030/tcp,3030/udp"

    volumes:
      - ./config:/config
```
