---
title: Docker Compose
---

Example `docker-compose.yaml` for **wud**:

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
  wud:
    image: ghcr.io/trueforge-org/wud:8.2.2
    container_name: wud
    restart: unless-stopped

    ports: []

    environment:
      VERSION: "$VERSION"
      WORKDIR: "/app"
      WUD_LOG_FORMAT: "text"
      WUD_REGISTRY_CUSTOM_TRUEFORGE_URL: "https://oci.trueforge.org"
      WUD_WATCHER_local_WATCHBYDEFAULT: "false"

    volumes:
      - ./config:/config
```
