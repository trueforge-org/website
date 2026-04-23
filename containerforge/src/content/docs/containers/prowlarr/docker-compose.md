---
title: Docker Compose
---

Example `docker-compose.yaml` for **prowlarr**:

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
  prowlarr:
    image: ghcr.io/trueforge-org/prowlarr:2.3.6.5351
    container_name: prowlarr
    restart: unless-stopped

    ports: []

    environment:
      DOTNET_EnableDiagnostics: "0"
      PROWLARR__SERVER__PORT: "9696"
      PROWLARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
