---
title: Docker Compose
---

Example `docker-compose.yaml` for **lvm-disk-watcher**:

```yaml
version: "3.9"

services:
  lvm-disk-watcher:
    image: ghcr.io/trueforge-org/lvm-disk-watcher:1.1.0
    container_name: lvm-disk-watcher
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
