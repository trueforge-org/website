---
title: Docker Compose
---

Example `docker-compose.yaml` for **kometa**:

```yaml
version: "3.9"

services:
  kometa:
    image: ghcr.io/trueforge-org/kometa:2.3.1
    container_name: kometa
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/app"
      PYTHONIOENCODING: "utf-8"

    volumes:
      - ./app:/app
      - ./config:/config
```
