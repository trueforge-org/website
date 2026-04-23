---
title: Docker Compose
---

Example `docker-compose.yaml` for **smokeping**:

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
  smokeping:
    image: ghcr.io/trueforge-org/smokeping:2.9.0-r0-ls164
    container_name: smokeping
    restart: unless-stopped

    ports:
      - "80:80"

    environment: {}

    volumes:
      - ./config:/config
      - ./data:/data
```
