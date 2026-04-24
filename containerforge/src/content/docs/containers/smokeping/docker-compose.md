---
title: Docker Compose
---

Example `docker-compose.yaml` for **smokeping**:

```yaml
version: "3.9"

services:
  smokeping:
    image: ghcr.io/trueforge-org/smokeping:2.9.0-r0-ls164
    container_name: smokeping
    restart: unless-stopped

    ports:
      - "80:80"

    environment: {}

    volumes:
      - ./config:/config
      - ./data:/data
```
