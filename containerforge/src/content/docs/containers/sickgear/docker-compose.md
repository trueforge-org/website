---
title: Docker Compose
---

Example `docker-compose.yaml` for **sickgear**:

```yaml
version: "3.9"

services:
  sickgear:
    image: ghcr.io/trueforge-org/sickgear:release_3.34.5
    container_name: sickgear
    restart: unless-stopped

    ports:
      - "8081:8081"

    environment:
      PYTHONIOENCODING: "UTF-8"

    volumes:
      - ./config:/config
```
