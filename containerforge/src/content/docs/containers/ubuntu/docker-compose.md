---
title: Docker Compose
---

Example `docker-compose.yaml` for **ubuntu**:

```yaml
version: "3.9"

services:
  ubuntu:
    image: ghcr.io/trueforge-org/ubuntu:24.04
    container_name: ubuntu
    restart: unless-stopped

    ports: []

    environment:
      : "Enable"
      DEBIAN_FRONTEND: "noninteractive"
      NVIDIA_DRIVER_CAPABILITIES: "compute,video,utility"
      detection: "of"
      dotnet: "running"
      in: "a"

    volumes:
      - ./config:/config
```
