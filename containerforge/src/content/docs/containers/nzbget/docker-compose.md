---
title: Docker Compose
---

Example `docker-compose.yaml` for **nzbget**:

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
  nzbget:
    image: ghcr.io/trueforge-org/nzbget:26.1
    container_name: nzbget
    restart: unless-stopped

    ports:
      - "6789:6789"

    environment:
      NZBGET__PORT: "6789"

    volumes:
      - ./config:/config
```
