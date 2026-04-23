---
title: Docker Compose
---

Example `docker-compose.yaml` for **plex**:

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
  plex:
    image: ghcr.io/trueforge-org/plex:1.43.1.10611-1e34174b1
    container_name: plex
    restart: unless-stopped

    ports:
      - "32400:32400"

    environment:
      Container: "(${VENDOR})"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"
      PLEX_MEDIA_SERVER_APPLICATION_SUPPORT_DIR: "/config/Library/Application"
      PLEX_MEDIA_SERVER_INFO_DEVICE: "Docker"
      PLEX_MEDIA_SERVER_INFO_VENDOR: "Docker"
      PLEX_MEDIA_SERVER_MAX_PLUGIN_PROCS: "6"
      Support": "PLEX_MEDIA_SERVER_HOME=\"/usr/lib/plexmediaserver"

    volumes:
      - ./config:/config
```
