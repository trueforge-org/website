---
title: Docker Compose
---

Example `docker-compose.yaml` for **pyload-ng**:

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
  pyload-ng:
    image: ghcr.io/trueforge-org/pyload-ng:0.5.0b3.dev93
    container_name: pyload-ng
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
