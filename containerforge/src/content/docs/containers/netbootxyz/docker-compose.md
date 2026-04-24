---
title: Docker Compose
---

Example `docker-compose.yaml` for **netbootxyz**:

```yaml
version: "3.9"

services:
  netbootxyz:
    image: ghcr.io/trueforge-org/netbootxyz:0.7.6
    container_name: netbootxyz
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment: {}

    volumes:
      - ./config:/config
```
