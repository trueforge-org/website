---
title: Docker Compose
---

Example `docker-compose.yaml` for **watchtower**:

```yaml
version: "3.9"

services:
  watchtower:
    image: ghcr.io/trueforge-org/watchtower:v1.7.1
    container_name: watchtower
    restart: unless-stopped

    ports: []

    environment:
      WATCHTOWER_LABEL_ENABLE: "true"
      WORKDIR: "/app"

    volumes:
      - ./config:/config
```
