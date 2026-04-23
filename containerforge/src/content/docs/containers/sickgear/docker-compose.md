---
title: Docker Compose
---

Example `docker-compose.yaml` for **sickgear**:

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
  sickgear:
    image: ghcr.io/trueforge-org/sickgear:release_3.34.5
    container_name: sickgear
    restart: unless-stopped

    ports:
      - "8081:8081"

    environment:
      PYTHONIOENCODING: "UTF-8"

    volumes:
      - ./config:/config
```
