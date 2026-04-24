---
title: Docker Compose
---

Example `docker-compose.yaml` for **mergerfs**:

```yaml
version: "3.9"

services:
  mergerfs:
    image: ghcr.io/trueforge-org/mergerfs:2.41.1
    container_name: mergerfs
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
