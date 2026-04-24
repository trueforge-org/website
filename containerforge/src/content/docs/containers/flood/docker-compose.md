---
title: Docker Compose
---

Example `docker-compose.yaml` for **flood**:

```yaml
version: "3.9"

services:
  flood:
    image: ghcr.io/trueforge-org/flood:4.13.9
    container_name: flood
    restart: unless-stopped

    ports:
      - "3000:3000"
      - "4500:4500"

    environment: {}

    volumes:
      - ./config:/config
```
