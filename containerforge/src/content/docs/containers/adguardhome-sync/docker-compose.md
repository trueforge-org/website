---
title: Docker Compose
---

Example `docker-compose.yaml` for **adguardhome-sync**:

```yaml
version: "3.9"

services:
  adguardhome-sync:
    image: ghcr.io/trueforge-org/adguardhome-sync:0.9.0
    container_name: adguardhome-sync
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
