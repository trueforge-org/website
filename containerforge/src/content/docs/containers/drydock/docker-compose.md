---
title: Docker Compose
---

Example `docker-compose.yaml` for **drydock**:

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
  drydock:
    image: ghcr.io/trueforge-org/drydock:0.0.17
    container_name: drydock
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      DD_LOG_FORMAT: "text"
      DD_STORE_PATH: "/config"
      DD_VERSION: "$VERSION"
      WORKDIR: "/app"

    volumes:
      - ./config:/config
```
