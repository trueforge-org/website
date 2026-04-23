---
title: Docker Compose
---

Example `docker-compose.yaml` for **jellyfin**:

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
  jellyfin:
    image: ghcr.io/trueforge-org/jellyfin:10.11.8
    container_name: jellyfin
    restart: unless-stopped

    ports:
      - "8096:8096"
      - "8920:8920"

    environment:
      MALLOC_TRIM_THRESHOLD_: "131072"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"

    volumes:
      - ./config:/config
```
