---
title: Docker Compose
---

Example `docker-compose.yaml` for **calibre-web**:

```yaml
version: "3.9"

services:
  calibre-web:
    image: ghcr.io/trueforge-org/calibre-web:0.6.26
    container_name: calibre-web
    restart: unless-stopped

    ports:
      - "8083:8083"

    environment:
      QTWEBENGINE_CHROMIUM_FLAGS: "--no-sandbox"

    volumes:
      - ./config:/config
```
