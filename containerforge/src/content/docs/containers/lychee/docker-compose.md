---
title: Docker Compose
---

Example `docker-compose.yaml` for **lychee**:

```yaml
version: "3.9"

services:
  lychee:
    image: ghcr.io/trueforge-org/lychee:6.10.4
    container_name: lychee
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
