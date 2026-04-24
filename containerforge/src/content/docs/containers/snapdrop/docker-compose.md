---
title: Docker Compose
---

Example `docker-compose.yaml` for **snapdrop**:

```yaml
version: "3.9"

services:
  snapdrop:
    image: ghcr.io/trueforge-org/snapdrop:b8b78cc2
    container_name: snapdrop
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"
      - "3000:3000"

    environment:
      HOME: "/app"
      NODE_ENV: "production"

    volumes:
      - ./config:/config
```
