---
title: Docker Compose
---

Example `docker-compose.yaml` for **budge**:

```yaml
version: "3.9"

services:
  budge:
    image: ghcr.io/trueforge-org/budge:0.0.9
    container_name: budge
    restart: unless-stopped

    ports:
      - "5000:5000"

    environment:
      BUDGE_DATABASE: "/config/budge.db"
      S6_STAGE2_HOOK: "/init-hook"

    volumes:
      - ./config:/config
```
