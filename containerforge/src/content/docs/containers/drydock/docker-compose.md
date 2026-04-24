---
title: Docker Compose
---

Example `docker-compose.yaml` for **drydock**:

```yaml
version: "3.9"

services:
  drydock:
    image: ghcr.io/trueforge-org/drydock:0.0.17
    container_name: drydock
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      DD_LOG_FORMAT: "text"
      DD_STORE_PATH: "/config"
      DD_VERSION: "$VERSION"
      WORKDIR: "/app"

    volumes:
      - ./config:/config
```
