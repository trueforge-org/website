---
title: Docker Compose
---

Example `docker-compose.yaml` for **readarr**:

```yaml
version: "3.9"

services:
  readarr:
    image: ghcr.io/trueforge-org/readarr:0.4.18.2805
    container_name: readarr
    restart: unless-stopped

    ports:
      - "8787:8787"

    environment:
      COMPlus_EnableDiagnostics: "0"
      READARR__SERVER__PORT: "8787"
      READARR__UPDATE__BRANCH: "develop"

    volumes:
      - ./config:/config
```
