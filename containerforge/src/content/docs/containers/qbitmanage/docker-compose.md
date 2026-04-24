---
title: Docker Compose
---

Example `docker-compose.yaml` for **qbitmanage**:

```yaml
version: "3.9"

services:
  qbitmanage:
    image: ghcr.io/trueforge-org/qbitmanage:4.7.0
    container_name: qbitmanage
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
