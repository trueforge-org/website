---
title: Docker Compose
---

Example `docker-compose.yaml` for **nextcloud-notify-push**:

```yaml
version: "3.9"

services:
  nextcloud-notify-push:
    image: ghcr.io/trueforge-org/nextcloud-notify-push:1.3.1
    container_name: nextcloud-notify-push
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
