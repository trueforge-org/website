---
title: Docker Compose
---

Example `docker-compose.yaml` for **wikijs**:

```yaml
version: "3.9"

services:
  wikijs:
    image: ghcr.io/trueforge-org/wikijs:2.5.312
    container_name: wikijs
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      HOME: "/app"
      NODE_ENV: "production"

    volumes:
      - ./config:/config
```
