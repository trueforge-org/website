---
title: Docker Compose
---

Example `docker-compose.yaml` for **yq**:

```yaml
version: "3.9"

services:
  yq:
    image: ghcr.io/trueforge-org/yq:3.4.3
    container_name: yq
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
