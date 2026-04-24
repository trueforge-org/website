---
title: Docker Compose
---

Example `docker-compose.yaml` for **unpackerr**:

```yaml
version: "3.9"

services:
  unpackerr:
    image: ghcr.io/trueforge-org/unpackerr:0.15.2
    container_name: unpackerr
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
