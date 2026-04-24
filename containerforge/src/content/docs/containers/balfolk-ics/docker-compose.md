---
title: Docker Compose
---

Example `docker-compose.yaml` for **balfolk-ics**:

```yaml
version: "3.9"

services:
  balfolk-ics:
    image: ghcr.io/trueforge-org/balfolk-ics:0.0.5
    container_name: balfolk-ics
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment: {}

    volumes:
      - ./config:/config
```
