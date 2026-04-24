---
title: Docker Compose
---

Example `docker-compose.yaml` for **home-assistant**:

```yaml
version: "3.9"

services:
  home-assistant:
    image: ghcr.io/trueforge-org/home-assistant:2026.4.3
    container_name: home-assistant
    restart: unless-stopped

    ports:
      - "8123:8123"

    environment:
      HOME: "/config"
      PYTHONUSERBASE: "/usr/local"

    volumes:
      - ./config:/config
```
