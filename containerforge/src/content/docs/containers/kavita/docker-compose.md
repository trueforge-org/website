---
title: Docker Compose
---

Example `docker-compose.yaml` for **kavita**:

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
  kavita:
    image: ghcr.io/trueforge-org/kavita:0.8.8.3
    container_name: kavita
    restart: unless-stopped

    ports:
      - "5000:5000"

    environment:
      COMPlus_EnableDiagnostics: "0"
      HOME: "/config"

    volumes:
      - ./config:/config
```
