---
title: Docker Compose
---

Example `docker-compose.yaml` for **tqm**:

```yaml
version: "3.9"

services:
  tqm:
    image: ghcr.io/trueforge-org/tqm:v1.19.0
    container_name: tqm
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
