---
title: Docker Compose
---

Example `docker-compose.yaml` for **doplarr**:

```yaml
version: "3.9"

services:
  doplarr:
    image: ghcr.io/trueforge-org/doplarr:3.7.0
    container_name: doplarr
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
