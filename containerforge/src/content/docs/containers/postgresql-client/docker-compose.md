---
title: Docker Compose
---

Example `docker-compose.yaml` for **postgresql-client**:

```yaml
version: "3.9"

services:
  postgresql-client:
    image: ghcr.io/trueforge-org/postgresql-client:9.6.24
    container_name: postgresql-client
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
