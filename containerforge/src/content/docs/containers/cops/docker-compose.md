---
title: Docker Compose
---

Example `docker-compose.yaml` for **cops**:

```yaml
version: "3.9"

services:
  cops:
    image: ghcr.io/trueforge-org/cops:4.3.1
    container_name: cops
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
