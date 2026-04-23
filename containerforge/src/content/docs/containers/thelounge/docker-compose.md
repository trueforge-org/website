---
title: Docker Compose
---

Example `docker-compose.yaml` for **thelounge**:

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
  thelounge:
    image: ghcr.io/trueforge-org/thelounge:4.4.3
    container_name: thelounge
    restart: unless-stopped

    ports:
      - "9000:9000"

    environment:
      THELOUNGE_HOME: "/config"

    volumes:
      - ./config:/config
```
