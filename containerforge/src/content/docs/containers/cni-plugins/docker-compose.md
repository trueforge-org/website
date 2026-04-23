---
title: Docker Compose
---

Example `docker-compose.yaml` for **cni-plugins**:

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
  cni-plugins:
    image: ghcr.io/trueforge-org/cni-plugins:v1.9.1
    container_name: cni-plugins
    restart: unless-stopped

    ports: []

    environment:
      CNI_BIN_DIR: "/host/opt/cni/bin"
      DEBIAN_FRONTEND: "noninteractive"

    volumes:
      - ./config:/config
```
