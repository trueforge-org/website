---
title: Docker Compose
---

Example `docker-compose.yaml` for **seerr**:

```yaml
version: "3.9"

services:
  seerr:
    image: ghcr.io/trueforge-org/seerr:3.2.0
    container_name: seerr
    restart: unless-stopped

    ports:
      - "5055:5055"

    environment:
      NODE_ENV: "production"
      NODE_OPTIONS: "--max_old_space_size=2048"
      PATH: "$PNPM_HOME:$PATH"
      PNPM_HOME: "/pnpm"

    volumes:
      - ./config:/config
```
