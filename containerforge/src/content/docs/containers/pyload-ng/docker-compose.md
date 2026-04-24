---
title: Docker Compose
---

Example `docker-compose.yaml` for **pyload-ng**:

```yaml
version: "3.9"

services:
  pyload-ng:
    image: ghcr.io/trueforge-org/pyload-ng:0.5.0b3.dev93
    container_name: pyload-ng
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
