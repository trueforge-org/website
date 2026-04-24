---
title: Docker Compose
---

Example `docker-compose.yaml` for **overseerr**:

```yaml
version: "3.9"

services:
  overseerr:
    image: ghcr.io/trueforge-org/overseerr:1.35.0
    container_name: overseerr
    restart: unless-stopped

    ports:
      - "5055:5055"

    environment:
      NODE_OPTIONS: "--max_old_space_size=2048"

    volumes:
      - ./config:/config
```
