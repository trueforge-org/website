---
title: Docker Compose
---

Example `docker-compose.yaml` for **syncthing**:

```yaml
version: "3.9"

services:
  syncthing:
    image: ghcr.io/trueforge-org/syncthing:2.0.16
    container_name: syncthing
    restart: unless-stopped

    ports:
      - "8384:8384"
      - "21027:21027/udp"
      - "22000:22000"
      - "22000:22000/udp"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
