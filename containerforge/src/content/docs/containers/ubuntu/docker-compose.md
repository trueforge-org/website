---
title: Docker Compose
---

Example `docker-compose.yaml` for **ubuntu**:

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
  ubuntu:
    image: ghcr.io/trueforge-org/ubuntu:24.04
    container_name: ubuntu
    restart: unless-stopped

    ports: []

    environment:
      : "Enable"
      DEBIAN_FRONTEND: "noninteractive"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"
      detection: "of"
      dotnet: "running"
      in: "a"

    volumes:
      - ./config:/config
```
