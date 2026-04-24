---
title: Docker Compose
---

Example `docker-compose.yaml` for **caddy**:

```yaml
version: "3.9"

services:
  caddy:
    image: ghcr.io/trueforge-org/caddy:2.11.2
    container_name: caddy
    restart: unless-stopped

    ports:
      - "8080:8080"
      - "8443:8443"

    environment: {}

    volumes:
      - ./config:/config
```
