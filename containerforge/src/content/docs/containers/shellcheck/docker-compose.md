---
title: Docker Compose
---

Example `docker-compose.yaml` for **shellcheck**:

```yaml
version: "3.9"

services:
  shellcheck:
    image: ghcr.io/trueforge-org/shellcheck:0.11.0
    container_name: shellcheck
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
