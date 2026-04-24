---
title: Docker Compose
---

Example `docker-compose.yaml` for **valkey**:

```yaml
version: "3.9"

services:
  valkey:
    image: ghcr.io/trueforge-org/valkey:7.2.11
    container_name: valkey
    restart: unless-stopped

    ports:
      - "6379:6379"

    environment:
      VALKEY_PORT: "6379"

    volumes:
      - ./config:/config
```
