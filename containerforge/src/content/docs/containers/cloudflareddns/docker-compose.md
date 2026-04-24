---
title: Docker Compose
---

Example `docker-compose.yaml` for **cloudflareddns**:

```yaml
version: "3.9"

services:
  cloudflareddns:
    image: ghcr.io/trueforge-org/cloudflareddns:3.0.0.4856
    container_name: cloudflareddns
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
