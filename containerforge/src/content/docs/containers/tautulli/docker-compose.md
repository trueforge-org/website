---
title: Docker Compose
---

Example `docker-compose.yaml` for **tautulli**:

```yaml
version: "3.9"

services:
  tautulli:
    image: ghcr.io/trueforge-org/tautulli:2.17.0
    container_name: tautulli
    restart: unless-stopped

    ports:
      - "8181:8181"

    environment:
      TAUTULLI_DOCKER: "True"

    volumes:
      - ./config:/config
```
