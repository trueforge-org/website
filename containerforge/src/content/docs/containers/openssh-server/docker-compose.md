---
title: Docker Compose
---

Example `docker-compose.yaml` for **openssh-server**:

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
  openssh-server:
    image: ghcr.io/trueforge-org/openssh-server:10.2_p1-r0-ls217
    container_name: openssh-server
    restart: unless-stopped

    ports:
      - "2222:2222"

    environment: {}

    volumes:
      - ./config:/config
```
