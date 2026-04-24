---
title: Docker Compose
---

Example `docker-compose.yaml` for **wud**:

```yaml
version: "3.9"

services:
  wud:
    image: ghcr.io/trueforge-org/wud:8.2.2
    container_name: wud
    restart: unless-stopped

    ports: []

    environment:
      VERSION: "$VERSION"
      WORKDIR: "/app"
      WUD_LOG_FORMAT: "text"
      WUD_REGISTRY_CUSTOM_TRUEFORGE_URL: "https://oci.trueforge.org"
      WUD_WATCHER_local_WATCHBYDEFAULT: "false"

    volumes:
      - ./config:/config
```
