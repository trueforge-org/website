---
title: Docker Compose
---

Example `docker-compose.yaml` for **hishtory-server**:

```yaml
version: "3.9"

services:
  hishtory-server:
    image: ghcr.io/trueforge-org/hishtory-server:0.335
    container_name: hishtory-server
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment: {}

    volumes:
      - ./config:/config
```
