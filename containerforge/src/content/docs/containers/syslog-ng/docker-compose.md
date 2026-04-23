---
title: Docker Compose
---

Example `docker-compose.yaml` for **syslog-ng**:

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
  syslog-ng:
    image: ghcr.io/trueforge-org/syslog-ng:4.10.2-r1-ls184
    container_name: syslog-ng
    restart: unless-stopped

    ports:
      - "5514:5514/udp"
      - "6514:6514"
      - "6601:6601"

    environment: {}

    volumes:
      - ./config:/config
```
