---
title: Docker Compose
---

Example `docker-compose.yaml` for **kubectl**:

```yaml
version: "3.9"

services:
  kubectl:
    image: ghcr.io/trueforge-org/kubectl:v1.31.1
    container_name: kubectl
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
