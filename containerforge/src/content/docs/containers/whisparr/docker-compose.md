---
title: Docker Compose
---

Example `docker-compose.yaml` for **whisparr**:

```yaml
version: "3.9"

services:
  whisparr:
    image: ghcr.io/trueforge-org/whisparr:3.1.0.2116
    container_name: whisparr
    restart: unless-stopped

    ports:
      - "6969:6969"

    environment:
      COMPlus_EnableDiagnostics: "0"
      WHISPARR__SERVER__PORT: "6969"
      WHISPARR__UPDATE__BRANCH: "eros"

    volumes:
      - ./config:/config
```
