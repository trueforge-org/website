---
title: Docker Compose
---

Example `docker-compose.yaml` for **monica**:

```yaml
version: "3.9"

services:
  monica:
    image: ghcr.io/trueforge-org/monica:4.1.2
    container_name: monica
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment:
      MEMORY_LIMIT: "512M"

    volumes:
      - ./config:/config
```
