---
title: Docker Compose
---

Example `docker-compose.yaml` for **jellyseerr**:

```yaml
version: "3.9"

services:
  jellyseerr:
    image: ghcr.io/trueforge-org/jellyseerr:2.7.3
    container_name: jellyseerr
    restart: unless-stopped

    ports:
      - "5055:5055"

    environment: {}

    volumes:
      - ./config:/config
```
