---
title: Docker Compose
---

Example `docker-compose.yaml` for **nextcloud-imaginary**:

```yaml
version: "3.9"

services:
  nextcloud-imaginary:
    image: ghcr.io/trueforge-org/nextcloud-imaginary:20230401
    container_name: nextcloud-imaginary
    restart: unless-stopped

    ports: []

    environment:
      MALLOC_ARENA_MAX: "2"

    volumes:
      - ./config:/config
```
