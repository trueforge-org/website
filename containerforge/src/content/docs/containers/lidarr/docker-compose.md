---
title: Docker Compose
---

Example `docker-compose.yaml` for **lidarr**:

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
  lidarr:
    image: ghcr.io/trueforge-org/lidarr:3.1.2.4938
    container_name: lidarr
    restart: unless-stopped

    ports:
      - "8686:8686"

    environment:
      DOTNET_EnableDiagnostics: "0"
      LIDARR__SERVER__PORT: "8686"
      LIDARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
