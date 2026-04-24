---
title: Docker Compose
---

Example `docker-compose.yaml` for **pwndrop**:

```yaml
version: "3.9"

services:
  pwndrop:
    image: ghcr.io/trueforge-org/pwndrop:1.0.1
    container_name: pwndrop
    restart: unless-stopped

    ports:
      - "4443:4443"
      - "8080:8080"

    environment: {}

    volumes:
      - ./config:/config
```
