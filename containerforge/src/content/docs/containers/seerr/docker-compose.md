---
title: Docker Compose
---

Example `docker-compose.yaml` for **seerr**:

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
  seerr:
    image: ghcr.io/trueforge-org/seerr:3.2.0
    container_name: seerr
    restart: unless-stopped

    ports:
      - "5055:5055"

    environment:
      NODE_ENV: "production"
      NODE_OPTIONS: "--max_old_space_size=2048"
      PATH: "$PNPM_HOME:$PATH"
      PNPM_HOME: "/pnpm"

    volumes:
      - ./config:/config
```
