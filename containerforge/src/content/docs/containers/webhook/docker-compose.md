---
title: Docker Compose
---

Example `docker-compose.yaml` for **webhook**:

```yaml
version: "3.9"

services:
  webhook:
    image: ghcr.io/trueforge-org/webhook:2.8.3
    container_name: webhook
    restart: unless-stopped

    ports:
      - "9000:9000"

    environment:
      WEBHOOK__PORT: "9000"
      WEBHOOK__URLPREFIX: "hooks"

    volumes:
      - ./config:/config
```
