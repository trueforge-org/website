---
title: Docker Compose
---

Example `docker-compose.yaml` for **ldap-auth**:

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
  ldap-auth:
    image: ghcr.io/trueforge-org/ldap-auth:3.4.5
    container_name: ldap-auth
    restart: unless-stopped

    ports:
      - "8888:8888"
      - "9000:9000"

    environment: {}

    volumes:
      - ./config:/config
```
