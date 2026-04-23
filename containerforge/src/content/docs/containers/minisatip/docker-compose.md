---
title: Docker Compose
---

Example `docker-compose.yaml` for **minisatip**:

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
  minisatip:
    image: ghcr.io/trueforge-org/minisatip:2.0.79
    container_name: minisatip
    restart: unless-stopped

    ports:
      - "554:554"
      - "1900:1900/udp"
      - "8875:8875"

    environment:
      -type: "c"
      ATTACHED_DEVICES_PERMS: "/dev/dvb"
      MAKEFLAGS: "-j4"

    volumes:
      - ./config:/config
```
