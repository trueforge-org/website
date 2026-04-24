---
title: Docker Compose
---

Example `docker-compose.yaml` for **habridge**:

```yaml
version: "3.9"

services:
  habridge:
    image: ghcr.io/trueforge-org/habridge:5.4.1
    container_name: habridge
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment: {}

    volumes:
      - ./config:/config
```
