---
title: Docker Compose
---

Example `docker-compose.yaml` for **limnoria**:

```yaml
version: "3.9"

services:
  limnoria:
    image: ghcr.io/trueforge-org/limnoria:2025.11.2
    container_name: limnoria
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment: {}

    volumes:
      - ./config:/config
```
