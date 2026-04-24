---
title: Docker Compose
---

Example `docker-compose.yaml` for **valkey-tools**:

```yaml
version: "3.9"

services:
  valkey-tools:
    image: ghcr.io/trueforge-org/valkey-tools:1.1.0
    container_name: valkey-tools
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
