---
title: Docker Compose
---

Example `docker-compose.yaml` for **golang**:

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
  golang:
    image: ghcr.io/trueforge-org/golang:1.26.2
    container_name: golang
    restart: unless-stopped

    ports: []

    environment:
      GOCACHE: "/tmp/go-build"
      GOPATH: "/config/go"
      GOTOOLCHAIN: "local"
      HOME: "/config"
      PATH: "/usr/local/go/bin:$PATH"

    volumes:
      - ./config:/config
```
