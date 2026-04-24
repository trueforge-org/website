---
title: Docker Compose
---

Example `docker-compose.yaml` for **piper**:

```yaml
version: "3.9"

services:
  piper:
    image: ghcr.io/trueforge-org/piper:2.2.2
    container_name: piper
    restart: unless-stopped

    ports:
      - "10200:10200"

    environment: {}

    volumes:
      - ./config:/config
```
