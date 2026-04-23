---
title: Docker Compose
---

Example `docker-compose.yaml` for **medusa**:

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
  medusa:
    image: ghcr.io/trueforge-org/medusa:1.0.25
    container_name: medusa
    restart: unless-stopped

    ports:
      - "8081:8081"

    environment:
      LANG: "en_US.UTF-8"
      PATH: "/app/venv/bin:$PATH"

    volumes:
      - ./config:/config
```
