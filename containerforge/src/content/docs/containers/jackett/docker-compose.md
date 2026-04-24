---
title: Docker Compose
---

Example `docker-compose.yaml` for **jackett**:

```yaml
version: "3.9"

services:
  jackett:
    image: ghcr.io/trueforge-org/jackett:v0.24.1736
    container_name: jackett
    restart: unless-stopped

    ports:
      - "9117:9117"

    environment: {}

    volumes:
      - ./config:/config
```
