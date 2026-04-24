---
title: Docker Compose
---

Example `docker-compose.yaml` for **hytale**:

```yaml
version: "3.9"

services:
  hytale:
    image: ghcr.io/trueforge-org/hytale:1.0.0
    container_name: hytale
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
