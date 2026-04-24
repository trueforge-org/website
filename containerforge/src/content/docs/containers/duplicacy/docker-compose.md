---
title: Docker Compose
---

Example `docker-compose.yaml` for **duplicacy**:

```yaml
version: "3.9"

services:
  duplicacy:
    image: ghcr.io/trueforge-org/duplicacy:1.8.0
    container_name: duplicacy
    restart: unless-stopped

    ports:
      - "3875:3875"

    environment: {}

    volumes:
      - ./cache:/cache
      - ./config:/config
      - ./logs:/logs
```
