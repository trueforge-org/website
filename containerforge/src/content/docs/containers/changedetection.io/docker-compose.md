---
title: Docker Compose
---

Example `docker-compose.yaml` for **changedetection.io**:

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
  changedetection.io:
    image: ghcr.io/trueforge-org/changedetection.io:0.54.10
    container_name: changedetection.io
    restart: unless-stopped

    ports:
      - "5000:5000"

    environment:
      PYTHONUNBUFFERED: "1"

    volumes:
      - ./config:/config
```
