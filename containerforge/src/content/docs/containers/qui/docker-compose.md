---
title: Docker Compose
---

Example `docker-compose.yaml` for **qui**:

```yaml
version: "3.9"

services:
  qui:
    image: ghcr.io/trueforge-org/qui:1.17.0
    container_name: qui
    restart: unless-stopped

    ports:
      - "7476:7476"
      - "7476:7476/udp"

    environment:
      WEBUI_PORTS: "7476/tcp,7476/udp"

    volumes:
      - ./config:/config
```
