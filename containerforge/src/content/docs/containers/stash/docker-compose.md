---
title: Docker Compose
---

Example `docker-compose.yaml` for **stash**:

```yaml
version: "3.9"

services:
  stash:
    image: ghcr.io/trueforge-org/stash:0.31.1
    container_name: stash
    restart: unless-stopped

    ports:
      - "9999:9999"

    environment: {}

    volumes:
      - ./config:/config
```
