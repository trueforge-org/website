---
title: Docker Compose
---

Example `docker-compose.yaml` for **ombi**:

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
  ombi:
    image: ghcr.io/trueforge-org/ombi:4.53.5
    container_name: ombi
    restart: unless-stopped

    ports:
      - "3579:3579"

    environment:
      COMPlus_EnableDiagnostics: "0"
      HOME: "/config"

    volumes:
      - ./config:/config
```
