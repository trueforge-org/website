---
title: Docker Compose
---

Example `docker-compose.yaml` for **radarr**:

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
  radarr:
    image: ghcr.io/trueforge-org/radarr:6.2.0.10390
    container_name: radarr
    restart: unless-stopped

    ports:
      - "7878:7878"

    environment:
      DOTNET_EnableDiagnostics: "0"
      RADARR__SERVER__PORT: "7878"
      RADARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
