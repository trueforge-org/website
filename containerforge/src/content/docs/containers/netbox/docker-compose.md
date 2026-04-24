---
title: Docker Compose
---

Example `docker-compose.yaml` for **netbox**:

```yaml
version: "3.9"

services:
  netbox:
    image: ghcr.io/trueforge-org/netbox:4.5.8
    container_name: netbox
    restart: unless-stopped

    ports:
      - "8000:8000"

    environment: {}

    volumes:
      - ./config:/config
```
