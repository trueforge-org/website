---
title: Docker Compose
---

Example `docker-compose.yaml` for **duplicati**:

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
  duplicati:
    image: ghcr.io/trueforge-org/duplicati:2.3.0.0_stable_2026-04-14
    container_name: duplicati
    restart: unless-stopped

    ports:
      - "8200:8200"

    environment:
      DUPLICATI__REQUIRE_DB_ENCRYPTION_KEY: "true"
      DUPLICATI__SERVER_DATAFOLDER: "/config"
      DUPLICATI__WEBSERVICE_ALLOWED_HOSTNAMES: "*"
      DUPLICATI__WEBSERVICE_INTERFACE: "any"
      DUPLICATI__WEBSERVICE_PORT: "8200"
      HOME: "/config"

    volumes:
      - ./backups:/backups
      - ./config:/config
      - ./source:/source
```
