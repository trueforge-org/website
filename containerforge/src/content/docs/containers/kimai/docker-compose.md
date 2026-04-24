---
title: Docker Compose
---

Example `docker-compose.yaml` for **kimai**:

```yaml
version: "3.9"

services:
  kimai:
    image: ghcr.io/trueforge-org/kimai:2.55.0
    container_name: kimai
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
