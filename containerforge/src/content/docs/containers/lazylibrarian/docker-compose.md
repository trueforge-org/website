---
title: Docker Compose
---

Example `docker-compose.yaml` for **lazylibrarian**:

```yaml
version: "3.9"

services:
  lazylibrarian:
    image: ghcr.io/trueforge-org/lazylibrarian:07aba984
    container_name: lazylibrarian
    restart: unless-stopped

    ports:
      - "5299:5299"

    environment: {}

    volumes:
      - ./config:/config
```
