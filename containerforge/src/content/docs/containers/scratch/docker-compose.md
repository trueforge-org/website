---
title: Docker Compose
---

Example `docker-compose.yaml` for **scratch**:

```yaml
version: "3.9"

services:
  scratch:
    image: ghcr.io/trueforge-org/scratch:1.0.0
    container_name: scratch
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
