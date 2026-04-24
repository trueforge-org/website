---
title: Docker Compose
---

Example `docker-compose.yaml` for **sealskin**:

```yaml
version: "3.9"

services:
  sealskin:
    image: ghcr.io/trueforge-org/sealskin:0.1.37
    container_name: sealskin
    restart: unless-stopped

    ports:
      - "8000:8000"
      - "8443:8443"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
      - ./storage:/storage
```
