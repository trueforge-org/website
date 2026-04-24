---
title: Docker Compose
---

Example `docker-compose.yaml` for **healthchecks**:

```yaml
version: "3.9"

services:
  healthchecks:
    image: ghcr.io/trueforge-org/healthchecks:4.1.1
    container_name: healthchecks
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      PYTHONUNBUFFERED: "1"

    volumes:
      - ./config:/config
```
