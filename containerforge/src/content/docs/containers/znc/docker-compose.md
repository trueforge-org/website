---
title: Docker Compose
---

Example `docker-compose.yaml` for **znc**:

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
  znc:
    image: ghcr.io/trueforge-org/znc:znc-1.10.1
    container_name: znc
    restart: unless-stopped

    ports:
      - "6501:6501"

    environment:
      MAKEFLAGS: "-j4"

    volumes:
      - ./config:/config
```
