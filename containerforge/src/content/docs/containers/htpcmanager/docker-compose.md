---
title: Docker Compose
---

Example `docker-compose.yaml` for **htpcmanager**:

```yaml
version: "3.9"

services:
  htpcmanager:
    image: ghcr.io/trueforge-org/htpcmanager:26a641bf
    container_name: htpcmanager
    restart: unless-stopped

    ports:
      - "8085:8085"

    environment: {}

    volumes:
      - ./config:/config
```
