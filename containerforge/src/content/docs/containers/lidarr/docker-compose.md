---
title: Docker Compose
---

Example `docker-compose.yaml` for **lidarr**:

```yaml
version: "3.9"

services:
  lidarr:
    image: ghcr.io/trueforge-org/lidarr:3.1.2.4938
    container_name: lidarr
    restart: unless-stopped

    ports:
      - "8686:8686"

    environment:
      DOTNET_EnableDiagnostics: "0"
      LIDARR__SERVER__PORT: "8686"
      LIDARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
