---
title: Docker Compose
---

Example `docker-compose.yaml` for **apprise-api**:

```yaml
version: "3.9"

services:
  apprise-api:
    image: ghcr.io/trueforge-org/apprise-api:1.3.3
    container_name: apprise-api
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment:
      APPRISE_ATTACH_DIR: "/attachments"
      APPRISE_ATTACH_SIZE: "0"
      APPRISE_CONFIG_DIR: "/config"

    volumes:
      - ./config:/config
```
