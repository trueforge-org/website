---
title: Docker Compose
---

Example `docker-compose.yaml` for **babybuddy**:

```yaml
version: "3.9"

services:
  babybuddy:
    image: ghcr.io/trueforge-org/babybuddy:2.8.0
    container_name: babybuddy
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      S6_STAGE2_HOOK: "/init-hook"

    volumes:
      - ./config:/config
```
