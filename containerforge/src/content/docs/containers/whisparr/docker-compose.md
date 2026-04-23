---
title: Docker Compose
---

Example `docker-compose.yaml` for **whisparr**:

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
  whisparr:
    image: ghcr.io/trueforge-org/whisparr:3.1.0.2116
    container_name: whisparr
    restart: unless-stopped

    ports:
      - "6969:6969"

    environment:
      COMPlus_EnableDiagnostics: "0"
      WHISPARR__SERVER__PORT: "6969"
      WHISPARR__UPDATE__BRANCH: "eros"

    volumes:
      - ./config:/config
```
