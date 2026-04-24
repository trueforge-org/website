---
title: Docker Compose
---

Example `docker-compose.yaml` for **pylon**:

```yaml
version: "3.9"

services:
  pylon:
    image: ghcr.io/trueforge-org/pylon:2.11.1
    container_name: pylon
    restart: unless-stopped

    ports:
      - "3131:3131"

    environment: {}

    volumes:
      - ./config:/config
```
