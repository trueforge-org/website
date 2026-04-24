---
title: Docker Compose
---

Example `docker-compose.yaml` for **autoscan**:

```yaml
version: "3.9"

services:
  autoscan:
    image: ghcr.io/trueforge-org/autoscan:1.4.0
    container_name: autoscan
    restart: unless-stopped

    ports:
      - "3030:3030"

    environment:
      IMAGE_STATS: "${IMAGE_STATS}"
      WEBUI_PORTS: "3030/tcp,3030/udp"

    volumes:
      - ./config:/config
```
