---
title: Docker Compose
---

Example `docker-compose.yaml` for **feed2toot**:

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
  feed2toot:
    image: ghcr.io/trueforge-org/feed2toot:0.17
    container_name: feed2toot
    restart: unless-stopped

    ports: []

    environment:
      PYTHONIOENCODING: "utf-8"
      PYTHONUNBUFFERED: "1"

    volumes:
      - ./config:/config
```
