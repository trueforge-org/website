---
title: Docker Compose
---

Example `docker-compose.yaml` for **mariadb-client**:

```yaml
version: "3.9"

services:
  mariadb-client:
    image: ghcr.io/trueforge-org/mariadb-client:12.2.2
    container_name: mariadb-client
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
