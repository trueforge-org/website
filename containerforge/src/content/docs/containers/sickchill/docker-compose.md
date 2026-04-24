---
title: Docker Compose
---

Example `docker-compose.yaml` for **sickchill**:

```yaml
version: "3.9"

services:
  sickchill:
    image: ghcr.io/trueforge-org/sickchill:2024.3.1
    container_name: sickchill
    restart: unless-stopped

    ports:
      - "8081:8081"

    environment:
      HOME: "/config"
      PYTHONIOENCODING: "UTF-8"

    volumes:
      - ./config:/config
```
