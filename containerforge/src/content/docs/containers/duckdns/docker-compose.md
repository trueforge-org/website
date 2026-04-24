---
title: Docker Compose
---

Example `docker-compose.yaml` for **duckdns**:

```yaml
version: "3.9"

services:
  duckdns:
    image: ghcr.io/trueforge-org/duckdns:95e5988b
    container_name: duckdns
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
