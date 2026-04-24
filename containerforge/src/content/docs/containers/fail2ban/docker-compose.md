---
title: Docker Compose
---

Example `docker-compose.yaml` for **fail2ban**:

```yaml
version: "3.9"

services:
  fail2ban:
    image: ghcr.io/trueforge-org/fail2ban:1.1.0-r2-ls29
    container_name: fail2ban
    restart: unless-stopped

    ports: []

    environment: {}

    volumes:
      - ./config:/config
```
