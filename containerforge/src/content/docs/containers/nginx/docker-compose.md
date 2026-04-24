---
title: Docker Compose
---

Example `docker-compose.yaml` for **nginx**:

```yaml
version: "3.9"

services:
  nginx:
    image: ghcr.io/trueforge-org/nginx:1.24.0-2ubuntu7.6
    container_name: nginx
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      NGINX_ENTRYPOINT_WORKER_PROCESSES_AUTOTUNE: "1"

    volumes:
      - ./config:/config
```
