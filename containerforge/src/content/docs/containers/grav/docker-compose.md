---
title: Docker Compose
---

Example `docker-compose.yaml` for **grav**:

```yaml
version: "3.9"

services:
  grav:
    image: ghcr.io/trueforge-org/grav:1.7.49.5
    container_name: grav
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
