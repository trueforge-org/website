---
title: Docker Compose
---

Example `docker-compose.yaml` for **openvscode-server**:

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
  openvscode-server:
    image: ghcr.io/trueforge-org/openvscode-server:1.105.1
    container_name: openvscode-server
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
