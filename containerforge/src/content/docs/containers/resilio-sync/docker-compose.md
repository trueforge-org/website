---
title: Docker Compose
---

Example `docker-compose.yaml` for **resilio-sync**:

```yaml
version: "3.9"

services:
  resilio-sync:
    image: ghcr.io/trueforge-org/resilio-sync:3.1.2.1076
    container_name: resilio-sync
    restart: unless-stopped

    ports:
      - "8888:8888"
      - "55555:55555"

    environment: {}

    volumes:
      - ./config:/config
      - ./sync:/sync
```
