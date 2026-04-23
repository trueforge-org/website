---
title: Docker Compose
---

Example `docker-compose.yaml` for **unifi-network-application**:

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
  unifi-network-application:
    image: ghcr.io/trueforge-org/unifi-network-application:10.3.55
    container_name: unifi-network-application
    restart: unless-stopped

    ports:
      - "8080:8080"
      - "8443:8443"
      - "8843:8843"
      - "8880:8880"

    environment:
      DEBIAN_FRONTEND: "noninteractive"

    volumes:
      - ./config:/config
```
