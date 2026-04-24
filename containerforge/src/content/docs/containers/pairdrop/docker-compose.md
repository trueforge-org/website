---
title: Docker Compose
---

Example `docker-compose.yaml` for **pairdrop**:

```yaml
version: "3.9"

services:
  pairdrop:
    image: ghcr.io/trueforge-org/pairdrop:1.11.2
    container_name: pairdrop
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      NODE_ENV: "production"

    volumes:
      - ./config:/config
```
