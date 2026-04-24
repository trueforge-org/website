---
title: Docker Compose
---

Example `docker-compose.yaml` for **jbops**:

```yaml
version: "3.9"

services:
  jbops:
    image: ghcr.io/trueforge-org/jbops:master
    container_name: jbops
    restart: unless-stopped

    ports: []

    environment:
      JBOPS__SCRIPT_PATH: "fun/plexapi_haiku.py"
      PLEXAPI_CONFIG_PATH: "/config/config.ini"

    volumes:
      - ./config:/config
```
