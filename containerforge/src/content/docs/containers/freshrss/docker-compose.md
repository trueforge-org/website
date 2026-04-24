---
title: Docker Compose
---

Example `docker-compose.yaml` for **freshrss**:

```yaml
version: "3.9"

services:
  freshrss:
    image: ghcr.io/trueforge-org/freshrss:1.28.1
    container_name: freshrss
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
