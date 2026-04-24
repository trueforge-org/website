---
title: Docker Compose
---

Example `docker-compose.yaml` for **tailscale**:

```yaml
version: "3.9"

services:
  tailscale:
    image: ghcr.io/trueforge-org/tailscale:v1.96.5
    container_name: tailscale
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
      - ./tailscale:/var/lib/tailscale
```
