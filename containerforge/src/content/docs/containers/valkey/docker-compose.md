---
title: Docker Compose
---

Example `docker-compose.yaml` for **valkey**:

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
  valkey:
    image: ghcr.io/trueforge-org/valkey:7.2.11
    container_name: valkey
    restart: unless-stopped

    ports:
      - "6379:6379"

    environment:
      VALKEY_PORT: "6379"

    volumes:
      - ./config:/config
```
