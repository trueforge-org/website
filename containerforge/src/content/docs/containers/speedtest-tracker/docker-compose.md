---
title: Docker Compose
---

Example `docker-compose.yaml` for **speedtest-tracker**:

```yaml
version: "3.9"

services:
  speedtest-tracker:
    image: ghcr.io/trueforge-org/speedtest-tracker:1.14.0
    container_name: speedtest-tracker
    restart: unless-stopped

    ports: []

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
