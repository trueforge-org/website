---
title: Docker Compose
---

Example `docker-compose.yaml` for **hedgedoc**:

```yaml
version: "3.9"

services:
  hedgedoc:
    image: ghcr.io/trueforge-org/hedgedoc:1.10.8
    container_name: hedgedoc
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      NODE_ENV: "production"
      PUPPETEER_SKIP_DOWNLOAD: "true"
      YARN_CACHE_FOLDER: "/tmp/.yarn"

    volumes:
      - ./config:/config
```
