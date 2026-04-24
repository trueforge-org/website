---
title: Docker Compose
---

Example `docker-compose.yaml` for **nzbget**:

```yaml
version: "3.9"

services:
  nzbget:
    image: ghcr.io/trueforge-org/nzbget:26.1
    container_name: nzbget
    restart: unless-stopped

    ports:
      - "6789:6789"

    environment:
      NZBGET__PORT: "6789"

    volumes:
      - ./config:/config
```
