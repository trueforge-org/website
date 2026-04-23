---
title: Docker Compose
---

Example `docker-compose.yaml` for **readarr**:

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
  readarr:
    image: ghcr.io/trueforge-org/readarr:0.4.18.2805
    container_name: readarr
    restart: unless-stopped

    ports:
      - "8787:8787"

    environment:
      COMPlus_EnableDiagnostics: "0"
      READARR__SERVER__PORT: "8787"
      READARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
