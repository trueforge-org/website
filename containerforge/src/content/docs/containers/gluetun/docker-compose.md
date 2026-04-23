---
title: Docker Compose
---

Example `docker-compose.yaml` for **gluetun**:

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
  gluetun:
    image: ghcr.io/trueforge-org/gluetun:v3.41.1
    container_name: gluetun
    restart: unless-stopped

    ports:
      - "8000:8000"
      - "8388:8388"
      - "8388:8388/udp"
      - "8888:8888"

    environment:
      VPN_INTERFACE: "tun0"
      VPN_SERVICE_PROVIDER: "pia"
      VPN_TYPE: "openvpn"

    volumes:
      - ./config:/config
```
