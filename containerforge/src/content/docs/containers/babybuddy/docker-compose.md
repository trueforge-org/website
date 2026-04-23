---
title: Docker Compose
---

Example `docker-compose.yaml` for **babybuddy**:

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
  babybuddy:
    image: ghcr.io/trueforge-org/babybuddy:2.8.0
    container_name: babybuddy
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      S6_STAGE2_HOOK: "/init-hook"

    volumes:
      - ./config:/config
```
