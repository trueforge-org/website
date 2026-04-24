---
title: Docker Compose
---

Example `docker-compose.yaml` for **node**:

```yaml
version: "3.9"

services:
  node:
    image: ghcr.io/trueforge-org/node:24.15.0
    container_name: node
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/app/nodehome"

    volumes:
      - ./config:/config
```
