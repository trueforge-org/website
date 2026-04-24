---
title: Docker Compose
---

Example `docker-compose.yaml` for **code-server**:

```yaml
version: "3.9"

services:
  code-server:
    image: ghcr.io/trueforge-org/code-server:4.117.0
    container_name: code-server
    restart: unless-stopped

    ports:
      - "8443:8443"

    environment:
      HOME: "/config"

    volumes:
      - ./config:/config
```
