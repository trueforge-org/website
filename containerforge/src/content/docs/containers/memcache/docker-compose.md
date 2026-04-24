---
title: Docker Compose
---

Example `docker-compose.yaml` for **memcache**:

```yaml
version: "3.9"

services:
  memcache:
    image: ghcr.io/trueforge-org/memcache:1.6.24-1build3
    container_name: memcache
    restart: unless-stopped

    ports:
      - "11211:11211"

    environment: {}

    volumes:
      - ./config:/config
```
