---
title: Docker Compose
---

Example `docker-compose.yaml` for **snapdrop**:

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
  snapdrop:
    image: ghcr.io/trueforge-org/snapdrop:b8b78cc2
    container_name: snapdrop
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment:
      HOME: "/app"
      NODE_ENV: "production"

    volumes:
      - ./config:/config
```
