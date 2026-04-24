---
title: Docker Compose
---

Example `docker-compose.yaml` for **go-yq**:

```yaml
version: "3.9"

services:
  go-yq:
    image: ghcr.io/trueforge-org/go-yq:4.53.2
    container_name: go-yq
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
