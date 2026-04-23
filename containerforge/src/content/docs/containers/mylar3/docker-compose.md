---
title: Docker Compose
---

Example `docker-compose.yaml` for **mylar3**:

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
  mylar3:
    image: ghcr.io/trueforge-org/mylar3:0.8.3
    container_name: mylar3
    restart: unless-stopped

    ports:
      - "8090:8090"

    environment: {}

    volumes:
      - ./config:/config
```
