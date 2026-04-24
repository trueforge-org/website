---
title: Docker Compose
---

Example `docker-compose.yaml` for **ddclient**:

```yaml
version: "3.9"

services:
  ddclient:
    image: ghcr.io/trueforge-org/ddclient:4.0.0
    container_name: ddclient
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
