---
title: Docker Compose
---

Example `docker-compose.yaml` for **irqbalance**:

```yaml
version: "3.9"

services:
  irqbalance:
    image: ghcr.io/trueforge-org/irqbalance:1.9.4-r1
    container_name: irqbalance
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
