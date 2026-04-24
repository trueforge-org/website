---
title: Docker Compose
---

Example `docker-compose.yaml` for **openvscode-server**:

```yaml
version: "3.9"

services:
  openvscode-server:
    image: ghcr.io/trueforge-org/openvscode-server:1.105.1
    container_name: openvscode-server
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
