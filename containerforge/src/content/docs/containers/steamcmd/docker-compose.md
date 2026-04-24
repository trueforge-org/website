---
title: Docker Compose
---

Example `docker-compose.yaml` for **steamcmd**:

```yaml
version: "3.9"

services:
  steamcmd:
    image: ghcr.io/trueforge-org/steamcmd:20180105-5
    container_name: steamcmd
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
