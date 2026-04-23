---
title: Docker Compose
---

Example `docker-compose.yaml` for **python**:

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
  python:
    image: ghcr.io/trueforge-org/python:3.14.4
    container_name: python
    restart: unless-stopped

    ports: []

    environment:
      CRYPTOGRAPHY_DONT_BUILD_RUST: "1"
      PATH: "/usr/local/bin:$PATH"
      PIP_BREAK_SYSTEM_PACKAGES: "1"
      PIP_DISABLE_PIP_VERSION_CHECK: "1"
      PIP_NO_CACHE_DIR: "1"
      PIP_PREFER_BINARY: "1"
      PIP_ROOT_USER_ACTION: "ignore"
      PYTHONDONTWRITEBYTECODE: "1"
      PYTHONUNBUFFERED: "1"
      UV_EXTRA_INDEX_URL: "https://wheel-index.linuxserver.io/ubuntu/"
      UV_NO_CACHE: "true"
      UV_SYSTEM_PYTHON: "true"
      VENV_FOLDER: "/app/venv"
      https://pypi.org/simple": "UV_INDEX_STRATEGY=\"unsafe-best-match"

    volumes:
      - ./config:/config
```
