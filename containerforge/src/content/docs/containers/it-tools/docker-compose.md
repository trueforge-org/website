---
title: Docker Compose
---

Example `docker-compose.yaml` for **it-tools**:

```yaml
version: "3.9"

services:
  it-tools:
    image: ghcr.io/trueforge-org/it-tools:v2024.10.22-7ca5933
    container_name: it-tools
    restart: unless-stopped

    ports:
      - "8080:8080"

    environment:
      HOME: "/tmp"

    volumes:
      - ./config:/config
```
