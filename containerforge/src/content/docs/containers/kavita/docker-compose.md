---
title: Docker Compose
---

Example `docker-compose.yaml` for **kavita**:

```yaml
version: "3.9"

services:
  kavita:
    image: ghcr.io/trueforge-org/kavita:0.8.8.3
    container_name: kavita
    restart: unless-stopped

    ports:
      - "5000:5000"

    environment:
      COMPlus_EnableDiagnostics: "0"
      HOME: "/config"

    volumes:
      - ./config:/config
```
