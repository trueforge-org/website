---
title: Docker-Compose
---


```yaml
name: python
services:
  python:
    container_name: python
    environment:
      CRYPTOGRAPHY_DONT_BUILD_RUST: "1"
      PATH: /usr/local/bin:$PATH
      PIP_BREAK_SYSTEM_PACKAGES: "1"
      PIP_DISABLE_PIP_VERSION_CHECK: "1"
      PIP_NO_CACHE_DIR: "1"
      PIP_PREFER_BINARY: "1"
      PIP_ROOT_USER_ACTION: ignore
      PYTHONDONTWRITEBYTECODE: "1"
      PYTHONUNBUFFERED: "1"
      UV_EXTRA_INDEX_URL: https://wheel-index.linuxserver.io/ubuntu/
      UV_NO_CACHE: "true"
      UV_SYSTEM_PYTHON: "true"
      VENV_FOLDER: /app/venv
      https://pypi.org/simple": UV_INDEX_STRATEGY="unsafe-best-match
    image: ghcr.io/trueforge-org/python:3.14.4
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
