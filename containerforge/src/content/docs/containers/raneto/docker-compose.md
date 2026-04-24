---
title: Docker Compose
---

Example `docker-compose.yaml` for **raneto**:

```yaml
version: "3.9"

services:
  raneto:
    image: ghcr.io/trueforge-org/raneto:0.18.1
    container_name: raneto
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      PORT: "3000"

    volumes:
      - ./config:/config
```
