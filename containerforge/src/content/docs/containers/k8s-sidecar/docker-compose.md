---
title: Docker Compose
---

Example `docker-compose.yaml` for **k8s-sidecar**:

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
  k8s-sidecar:
    image: ghcr.io/trueforge-org/k8s-sidecar:2.6.0
    container_name: k8s-sidecar
    restart: unless-stopped

    ports: []

    environment:
      PATH: "/app/venv/bin:$PATH"
      RELEASE_URL: "https://github.com/kiwigrid/k8s-sidecar/archive/refs/tags/${VERSION}.tar.gz"

    volumes:
      - ./config:/config
```
