---
title: Docker Compose
---

Example `docker-compose.yaml` for **smartctl-exporter**:

```yaml
version: "3.9"

services:
  smartctl-exporter:
    image: ghcr.io/trueforge-org/smartctl-exporter:0.14.0
    container_name: smartctl-exporter
    restart: unless-stopped

    ports:
      - "9633:9633"

    environment: {}

    volumes:
      - ./config:/config
```
