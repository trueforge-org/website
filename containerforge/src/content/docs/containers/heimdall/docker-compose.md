---
title: Docker Compose
---

Example `docker-compose.yaml` for **heimdall**:

```yaml
version: "3.9"

services:
  heimdall:
    image: ghcr.io/trueforge-org/heimdall:2.7.6
    container_name: heimdall
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
