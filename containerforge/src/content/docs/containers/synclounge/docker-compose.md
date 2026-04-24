---
title: Docker Compose
---

Example `docker-compose.yaml` for **synclounge**:

```yaml
version: "3.9"

services:
  synclounge:
    image: ghcr.io/trueforge-org/synclounge:5.2.35
    container_name: synclounge
    restart: unless-stopped

    ports:
      - "8088:8088"

    environment:
      HOME: "/app"

    volumes:
      - ./config:/config
```
