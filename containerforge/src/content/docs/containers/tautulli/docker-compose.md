---
title: Docker Compose
---

Example `docker-compose.yaml` for **tautulli**:

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
  tautulli:
    image: ghcr.io/trueforge-org/tautulli:2.17.0
    container_name: tautulli
    restart: unless-stopped

    ports:
      - "8181:8181"

    environment:
      TAUTULLI_DOCKER: "True"

    volumes:
      - ./config:/config
```
