---
title: Docker Compose
---

Example `docker-compose.yaml` for **hedgedoc**:

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
  hedgedoc:
    image: ghcr.io/trueforge-org/hedgedoc:1.10.8
    container_name: hedgedoc
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      NODE_ENV: "production"
      PUPPETEER_SKIP_DOWNLOAD: "true"
      YARN_CACHE_FOLDER: "/tmp/.yarn"

    volumes:
      - ./config:/config
```
