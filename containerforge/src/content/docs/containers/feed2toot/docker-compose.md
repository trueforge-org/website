---
title: Docker Compose
---

Example `docker-compose.yaml` for **feed2toot**:

```yaml
version: "3.9"

services:
  feed2toot:
    image: ghcr.io/trueforge-org/feed2toot:0.17
    container_name: feed2toot
    restart: unless-stopped

    ports: []

    environment:
      PYTHONIOENCODING: "utf-8"
      PYTHONUNBUFFERED: "1"

    volumes:
      - ./config:/config
```
