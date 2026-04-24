---
title: Docker Compose
---

Example `docker-compose.yaml` for **prowlarr**:

```yaml
version: "3.9"

services:
  prowlarr:
    image: ghcr.io/trueforge-org/prowlarr:2.3.6.5351
    container_name: prowlarr
    restart: unless-stopped

    ports:
      - "9696:9696"

    environment:
      DOTNET_EnableDiagnostics: "0"
      PROWLARR__SERVER__PORT: "9696"
      PROWLARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
