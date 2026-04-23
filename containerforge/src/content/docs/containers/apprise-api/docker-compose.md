---
title: Docker Compose
---

Example `docker-compose.yaml` for **apprise-api**:

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
  apprise-api:
    image: ghcr.io/trueforge-org/apprise-api:1.3.3
    container_name: apprise-api
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      APPRISE_ATTACH_DIR: "/attachments"
      APPRISE_ATTACH_SIZE: "0"
      APPRISE_CONFIG_DIR: "/config"

    volumes:
      - ./config:/config
```
