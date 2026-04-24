---
title: Docker Compose
---

Example `docker-compose.yaml` for **deemix**:

```yaml
version: "3.9"

services:
  deemix:
    image: ghcr.io/trueforge-org/deemix:0.0.1
    container_name: deemix
    restart: unless-stopped

    ports:
      - "6595:6595"

    environment: {}

    volumes:
      - ./config:/config
```
