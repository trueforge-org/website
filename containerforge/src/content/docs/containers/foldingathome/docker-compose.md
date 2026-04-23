---
title: Docker Compose
---

Example `docker-compose.yaml` for **foldingathome**:

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
  foldingathome:
    image: ghcr.io/trueforge-org/foldingathome:8.4.9
    container_name: foldingathome
    restart: unless-stopped

    ports:
      - "7396:7396"

    environment:
      DEBIAN_FRONTEND: "noninteractive"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"

    volumes:
      - ./config:/config
```
