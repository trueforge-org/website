---
title: Docker Compose
---

Example `docker-compose.yaml` for **kopia**:

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
  kopia:
    image: ghcr.io/trueforge-org/kopia:v0.22.3
    container_name: kopia
    restart: unless-stopped

    ports: []

    environment:
      KOPIA_CACHE_DIRECTORY: "/config/cache"
      KOPIA_CHECK_FOR_UPDATES: "false"
      KOPIA_CONFIG_PATH: "/config/repository.config"
      KOPIA_LOG_DIR: "/config/logs"
      KOPIA_PERSIST_CREDENTIALS_ON_CONNECT: "false"
      KOPIA_WEB_ENABLED: "true"
      KOPIA_WEB_PORT: "51515"

    volumes:
      - ./config:/config
```
