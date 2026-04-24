---
title: Docker Compose
---

Example `docker-compose.yaml` for **ombi**:

```yaml
version: "3.9"

services:
  ombi:
    image: ghcr.io/trueforge-org/ombi:4.53.5
    container_name: ombi
    restart: unless-stopped

    ports:
      - "3579:3579"

    environment:
      COMPlus_EnableDiagnostics: "0"
      HOME: "/config"

    volumes:
      - ./config:/config
```
