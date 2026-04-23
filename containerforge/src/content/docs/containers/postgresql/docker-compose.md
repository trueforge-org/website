---
title: Docker Compose
---

Example `docker-compose.yaml` for **postgresql**:

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
  postgresql:
    image: ghcr.io/trueforge-org/postgresql:18.2
    container_name: postgresql
    restart: unless-stopped

    ports:
      - "5432:5432"

    environment:
      LANG: "en_US.UTF-8"
      LC_ALL: "en_US.UTF-8"
      PATH: "/usr/lib/postgresql/${PG_MAJOR}/bin:$PATH"
      PGDATA: "/config/$PG_MAJOR"
      PG_MAJOR: "$PG_MAJOR"

    volumes:
      - ./config:/config
```
