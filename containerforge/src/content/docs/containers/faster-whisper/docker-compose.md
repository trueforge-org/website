---
title: Docker Compose
---

Example `docker-compose.yaml` for **faster-whisper**:

```yaml
version: "3.9"

services:
  faster-whisper:
    image: ghcr.io/trueforge-org/faster-whisper:3.0.2
    container_name: faster-whisper
    restart: unless-stopped

    ports:
      - "10300:10300"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
