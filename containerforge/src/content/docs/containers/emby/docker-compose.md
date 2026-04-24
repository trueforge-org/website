---
title: Docker Compose
---

Example `docker-compose.yaml` for **emby**:

```yaml
version: "3.9"

services:
  emby:
    image: ghcr.io/trueforge-org/emby:4.10.0.10
    container_name: emby
    restart: unless-stopped

    ports:
      - "8096:8096"

    environment:
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"

    volumes:
      - ./config:/config
```
