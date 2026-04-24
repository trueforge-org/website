---
title: Docker Compose
---

Example `docker-compose.yaml` for **deluge**:

```yaml
version: "3.9"

services:
  deluge:
    image: ghcr.io/trueforge-org/deluge:2.2.0
    container_name: deluge
    restart: unless-stopped

    ports:
      - "58846:58846"

    environment:
      DELUGE_BIN: "deluged"
      PYTHON_EGG_CACHE: "/config/plugins/.python-eggs"
      XDG_CONFIG_HOME: "/config"

    volumes:
      - ./config:/config
```
