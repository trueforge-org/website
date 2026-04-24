---
title: Docker Compose
---

Example `docker-compose.yaml` for **requestrr**:

```yaml
version: "3.9"

services:
  requestrr:
    image: ghcr.io/trueforge-org/requestrr:2.1.9
    container_name: requestrr
    restart: unless-stopped

    ports:
      - "4545:4545"

    environment:
      WEBUI_PORTS: "4545/tcp,4545/udp"

    volumes:
      - ./config:/config
```
