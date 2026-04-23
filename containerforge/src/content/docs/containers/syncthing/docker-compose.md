---
title: Docker Compose
---

Example `docker-compose.yaml` for **syncthing**:

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
  syncthing:
    image: ghcr.io/trueforge-org/syncthing:2.0.16
    container_name: syncthing
    restart: unless-stopped

    ports:
      - "8384:8384"
      - "21027:21027/udp"
      - "22000:22000"
      - "22000:22000/udp"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
