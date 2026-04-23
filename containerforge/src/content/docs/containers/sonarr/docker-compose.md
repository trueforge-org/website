---
title: Docker Compose
---

Example `docker-compose.yaml` for **sonarr**:

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
  sonarr:
    image: ghcr.io/trueforge-org/sonarr:4.0.17.2953
    container_name: sonarr
    restart: unless-stopped

    ports:
      - "8989:8989"

    environment:
      DOTNET_EnableDiagnostics: "0"
      SONARR__SERVER__PORT: "8989"
      SONARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
