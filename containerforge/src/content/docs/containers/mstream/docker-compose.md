---
title: Docker Compose
---

Example `docker-compose.yaml` for **mstream**:

```yaml
version: "3.9"

services:
  mstream:
    image: ghcr.io/trueforge-org/mstream:6.5.1
    container_name: mstream
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
