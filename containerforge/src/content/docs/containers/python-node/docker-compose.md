---
title: Docker Compose
---

Example `docker-compose.yaml` for **python-node**:

```yaml
version: "3.9"

services:
  python-node:
    image: ghcr.io/trueforge-org/python-node:3.14.4
    container_name: python-node
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/tmp/nodehome"

    volumes:
      - ./config:/config
```
