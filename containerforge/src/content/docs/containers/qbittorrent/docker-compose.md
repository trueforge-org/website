---
title: Docker Compose
---

Example `docker-compose.yaml` for **qbittorrent**:

```yaml
version: "3.9"

services:
  qbittorrent:
    image: ghcr.io/trueforge-org/qbittorrent:5.1.4
    container_name: qbittorrent
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      HOME: "/config"
      QBT_CONFIRM_LEGAL_NOTICE: "1"
      XDG_CONFIG_HOME: "/config"
      XDG_DATA_HOME: "/config"

    volumes:
      - ./config:/config
```
