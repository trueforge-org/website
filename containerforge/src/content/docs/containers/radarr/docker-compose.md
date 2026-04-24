---
title: Docker Compose
---

Example `docker-compose.yaml` for **radarr**:

```yaml
version: "3.9"

services:
  radarr:
    image: ghcr.io/trueforge-org/radarr:6.2.0.10390
    container_name: radarr
    restart: unless-stopped

    ports:
      - "7878:7878"

    environment:
      DOTNET_EnableDiagnostics: "0"
      RADARR__SERVER__PORT: "7878"
      RADARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
