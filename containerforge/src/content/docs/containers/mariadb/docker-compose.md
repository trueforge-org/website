---
title: Docker Compose
---

Example `docker-compose.yaml` for **mariadb**:

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
  mariadb:
    image: ghcr.io/trueforge-org/mariadb:11.4.8-r0
    container_name: mariadb
    restart: unless-stopped

    ports:
      - "3306:3306"

    environment:
      DATADIR: "$MYSQL_DIR/databases"
      MYSQL_DIR: "/config"

    volumes:
      - ./config:/config
```
