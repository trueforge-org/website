---
title: Docker Compose
---

Example `docker-compose.yaml` for **rsnapshot**:

```yaml
version: "3.9"

services:
  rsnapshot:
    image: ghcr.io/trueforge-org/rsnapshot:1.4.5-r0-ls152
    container_name: rsnapshot
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
