---
title: Docker Compose
---

Example `docker-compose.yaml` for **budge**:

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
  budge:
    image: ghcr.io/trueforge-org/budge:0.0.9
    container_name: budge
    restart: unless-stopped

    ports:
      - "5000:5000"

    environment:
      BUDGE_DATABASE: "/config/budge.db"
      S6_STAGE2_HOOK: "/init-hook"

    volumes:
      - ./config:/config
```
