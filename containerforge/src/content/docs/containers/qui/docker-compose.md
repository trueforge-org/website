---
title: Docker Compose
---

Example `docker-compose.yaml` for **qui**:

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
  qui:
    image: ghcr.io/trueforge-org/qui:1.17.0
    container_name: qui
    restart: unless-stopped

    ports:
      - "7476:7476"
      - "7476:7476/udp"

    environment:
      WEBUI_PORTS: "7476/tcp,7476/udp"

    volumes:
      - ./config:/config
```
