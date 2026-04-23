---
title: Docker Compose
---

Example `docker-compose.yaml` for **nzbhydra2**:

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
  nzbhydra2:
    image: ghcr.io/trueforge-org/nzbhydra2:v8.7.1
    container_name: nzbhydra2
    restart: unless-stopped

    ports: []

    environment:
      JAVA_TOOL_OPTIONS: "-Xmx256M"

    volumes:
      - ./config:/config
```
