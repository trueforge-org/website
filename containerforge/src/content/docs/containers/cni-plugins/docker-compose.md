---
title: Docker Compose
---

Example `docker-compose.yaml` for **cni-plugins**:

```yaml
version: "3.9"

services:
  cni-plugins:
    image: ghcr.io/trueforge-org/cni-plugins:v1.9.1
    container_name: cni-plugins
    restart: unless-stopped

    ports: []

    environment:
      CNI_BIN_DIR: "/host/opt/cni/bin"
      DEBIAN_FRONTEND: "noninteractive"

    volumes:
      - ./config:/config
```
