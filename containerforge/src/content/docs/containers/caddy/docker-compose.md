---
title: Docker Compose
---

Example `docker-compose.yaml` for **caddy**:

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
  caddy:
    image: ghcr.io/trueforge-org/caddy:2.11.2
    container_name: caddy
    restart: unless-stopped

    ports:
      - "8080:8080"
      - "8443:8443"

    environment: {}

    volumes:
      - ./config:/config
```
