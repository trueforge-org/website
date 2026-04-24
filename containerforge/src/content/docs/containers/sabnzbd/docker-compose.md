---
title: Docker Compose
---

Example `docker-compose.yaml` for **sabnzbd**:

```yaml
version: "3.9"

services:
  sabnzbd:
    image: ghcr.io/trueforge-org/sabnzbd:4.5.5
    container_name: sabnzbd
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      SABNZBD__ADDRESS: "[::]"
      SABNZBD__PORT: "8080"

    volumes:
      - ./config:/config
```
