---
title: Docker Compose
---

Example `docker-compose.yaml` for **snipe-it**:

```yaml
version: "3.9"

services:
  snipe-it:
    image: ghcr.io/trueforge-org/snipe-it:8.4.1
    container_name: snipe-it
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
