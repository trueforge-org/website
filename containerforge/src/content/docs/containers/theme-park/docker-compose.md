---
title: Docker Compose
---

Example `docker-compose.yaml` for **theme-park**:

```yaml
version: "3.9"

services:
  theme-park:
    image: ghcr.io/trueforge-org/theme-park:1.22.0
    container_name: theme-park
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      NGINX_ENTRYPOINT_WORKER_PROCESSES_AUTOTUNE: "1"

    volumes:
      - ./config:/config
```
