---
title: Docker Compose
---

Example `docker-compose.yaml` for **nginx**:

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
  nginx:
    image: ghcr.io/trueforge-org/nginx:1.24.0-2ubuntu7.6
    container_name: nginx
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      NGINX_ENTRYPOINT_WORKER_PROCESSES_AUTOTUNE: "1"

    volumes:
      - ./config:/config
```
