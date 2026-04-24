---
title: Docker Compose
---

Example `docker-compose.yaml` for **medusa**:

```yaml
version: "3.9"

services:
  medusa:
    image: ghcr.io/trueforge-org/medusa:1.0.25
    container_name: medusa
    restart: unless-stopped

    ports:
      - "8081:8081"

    environment:
      LANG: "en_US.UTF-8"
      PATH: "/app/venv/bin:$PATH"

    volumes:
      - ./config:/config
```
