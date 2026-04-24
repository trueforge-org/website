---
title: Docker Compose
---

Example `docker-compose.yaml` for **foldingathome**:

```yaml
version: "3.9"

services:
  foldingathome:
    image: ghcr.io/trueforge-org/foldingathome:8.4.9
    container_name: foldingathome
    restart: unless-stopped

    ports:
      - "7396:7396"

    environment:
      DEBIAN_FRONTEND: "noninteractive"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"

    volumes:
      - ./config:/config
```
