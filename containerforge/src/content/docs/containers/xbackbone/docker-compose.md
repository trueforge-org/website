---
title: Docker Compose
---

Example `docker-compose.yaml` for **xbackbone**:

```yaml
version: "3.9"

services:
  xbackbone:
    image: ghcr.io/trueforge-org/xbackbone:3.8.1
    container_name: xbackbone
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
