---
title: Docker Compose
---

Example `docker-compose.yaml` for **fail2ban**:

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
  fail2ban:
    image: ghcr.io/trueforge-org/fail2ban:1.1.0-r2-ls29
    container_name: fail2ban
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
