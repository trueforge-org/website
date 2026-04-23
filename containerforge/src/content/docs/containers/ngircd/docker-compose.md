---
title: Docker Compose
---

Example `docker-compose.yaml` for **ngircd**:

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
  ngircd:
    image: ghcr.io/trueforge-org/ngircd:27-r1-ls163
    container_name: ngircd
    restart: unless-stopped

    ports:
      - "6667:6667"

    environment: {}

    volumes:
      - ./config:/config
```
