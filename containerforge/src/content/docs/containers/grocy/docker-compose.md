---
title: Docker Compose
---

Example `docker-compose.yaml` for **grocy**:

```yaml
version: "3.9"

services:
  grocy:
    image: ghcr.io/trueforge-org/grocy:4.6.0
    container_name: grocy
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
