---
title: Docker Compose
---

Example `docker-compose.yaml` for **renovate**:

```yaml
version: "3.9"

services:
  renovate:
    image: ghcr.io/trueforge-org/renovate:43.141.1
    container_name: renovate
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
