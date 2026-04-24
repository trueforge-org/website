---
title: Docker Compose
---

Example `docker-compose.yaml` for **jellyfin**:

```yaml
version: "3.9"

services:
  jellyfin:
    image: ghcr.io/trueforge-org/jellyfin:10.11.8
    container_name: jellyfin
    restart: unless-stopped

    ports:
      - "8096:8096"
      - "8920:8920"

    environment:
      MALLOC_TRIM_THRESHOLD_: "131072"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"

    volumes:
      - ./config:/config
```
