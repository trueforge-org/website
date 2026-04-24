---
title: Docker Compose
---

Example `docker-compose.yaml` for **nextcloud-fpm**:

```yaml
version: "3.9"

services:
  nextcloud-fpm:
    image: ghcr.io/trueforge-org/nextcloud-fpm:33.0.2-fpm
    container_name: nextcloud-fpm
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
