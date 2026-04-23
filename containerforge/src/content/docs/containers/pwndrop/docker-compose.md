---
title: Docker Compose
---

Example `docker-compose.yaml` for **pwndrop**:

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
  pwndrop:
    image: ghcr.io/trueforge-org/pwndrop:1.0.1
    container_name: pwndrop
    restart: unless-stopped

    ports:
      - "4443:4443"
      - "8080:8080"

    environment: {}

    volumes:
      - ./config:/config
```
