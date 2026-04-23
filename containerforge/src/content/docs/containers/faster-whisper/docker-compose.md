---
title: Docker Compose
---

Example `docker-compose.yaml` for **faster-whisper**:

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
  faster-whisper:
    image: ghcr.io/trueforge-org/faster-whisper:3.0.2
    container_name: faster-whisper
    restart: unless-stopped

    ports:
      - "10300:10300"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
