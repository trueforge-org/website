---
title: Docker Compose
---

Example `docker-compose.yaml` for **airsonic-advanced**:

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
  airsonic-advanced:
    image: ghcr.io/trueforge-org/airsonic-advanced:11.1.4
    container_name: airsonic-advanced
    restart: unless-stopped

    ports:
      - "4040:4040"

    environment:
      AIRSONIC_ADVANCED_HOME: "/app"
      AIRSONIC_ADVANCED_SETTINGS: "/config"
      LANG: "C.UTF-8"

    volumes:
      - ./config:/config
```
