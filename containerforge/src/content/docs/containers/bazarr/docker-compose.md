---
title: Docker Compose
---

Example `docker-compose.yaml` for **bazarr**:

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
  bazarr:
    image: ghcr.io/trueforge-org/bazarr:v1.5.6
    container_name: bazarr
    restart: unless-stopped

    ports:
      - "6767:6767"

    environment:
      BAZARR_PACKAGE_AUTHOR: "${VENDOR}"
      BAZARR_PACKAGE_VERSION: "${VERSION}"
      BAZARR_VERSION: "${VERSION}"
      BAZARR__PORT: "6767"

    volumes:
      - ./config:/config
```
