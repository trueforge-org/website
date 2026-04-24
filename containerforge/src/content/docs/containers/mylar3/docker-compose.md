---
title: Docker Compose
---

Example `docker-compose.yaml` for **mylar3**:

```yaml
version: "3.9"

services:
  mylar3:
    image: ghcr.io/trueforge-org/mylar3:0.8.3
    container_name: mylar3
    restart: unless-stopped

    ports:
      - "8090:8090"

    environment: {}

    volumes:
      - ./config:/config
```
