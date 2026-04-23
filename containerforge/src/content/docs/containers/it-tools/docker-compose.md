---
title: Docker Compose
---

Example `docker-compose.yaml` for **it-tools**:

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
  it-tools:
    image: ghcr.io/trueforge-org/it-tools:v2024.10.22-7ca5933
    container_name: it-tools
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      HOME: "/tmp"

    volumes:
      - ./config:/config
```
