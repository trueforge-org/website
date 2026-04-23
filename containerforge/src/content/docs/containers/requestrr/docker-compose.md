---
title: Docker Compose
---

Example `docker-compose.yaml` for **requestrr**:

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
  requestrr:
    image: ghcr.io/trueforge-org/requestrr:2.1.9
    container_name: requestrr
    restart: unless-stopped

    ports:
      - "4545:4545"

    environment:
      WEBUI_PORTS: "4545/tcp,4545/udp"

    volumes:
      - ./config:/config
```
