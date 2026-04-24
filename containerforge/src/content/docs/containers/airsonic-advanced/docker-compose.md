---
title: Docker Compose
---

Example `docker-compose.yaml` for **airsonic-advanced**:

```yaml
version: "3.9"

services:
  airsonic-advanced:
    image: ghcr.io/trueforge-org/airsonic-advanced:11.1.4
    container_name: airsonic-advanced
    restart: unless-stopped

    ports:
      - "4040:4040"

    environment:
      AIRSONIC_ADVANCED_HOME: "/app"
      AIRSONIC_ADVANCED_SETTINGS: "/config"
      LANG: "C.UTF-8"

    volumes:
      - ./config:/config
```
