---
title: Docker Compose
---

Example `docker-compose.yaml` for **mongosh**:

```yaml
version: "3.9"

services:
  mongosh:
    image: ghcr.io/trueforge-org/mongosh:2.8.2
    container_name: mongosh
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
