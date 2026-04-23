---
title: Docker Compose
---

Example `docker-compose.yaml` for **socket-proxy**:

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
  socket-proxy:
    image: ghcr.io/trueforge-org/socket-proxy:3.2.13-r0-ls70
    container_name: socket-proxy
    restart: unless-stopped

    ports: []

    environment:
      ALLOW_RESTARTS: "0"
      ALLOW_START: "0"
      ALLOW_STOP: "0"
      AUTH: "0"
      BUILD: "0"
      COMMIT: "0"
      CONFIGS: "0"
      CONTAINERS: "0"
      DISTRIBUTION: "0"
      EVENTS: "1"
      EXEC: "0"
      IMAGES: "0"
      INFO: "0"
      LOG_LEVEL: "info"
      NETWORKS: "0"
      NODES: "0"
      PING: "1"
      PLUGINS: "0"
      POST: "0"
      SECRETS: "0"
      SERVICES: "0"
      SESSION: "0"
      SOCKET_PATH: "/var/run/docker.sock"
      SWARM: "0"
      SYSTEM: "0"
      TASKS: "0"
      VERSION: "1"
      VOLUMES: "0"

    volumes:
      - ./config:/config
```
