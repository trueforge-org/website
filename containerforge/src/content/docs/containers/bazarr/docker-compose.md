---
title: Docker Compose
---

Example `docker-compose.yaml` for **bazarr**:

```yaml
version: "3.9"

services:
  bazarr:
    image: ghcr.io/trueforge-org/bazarr:v1.5.6
    container_name: bazarr
    restart: unless-stopped

    ports:
      - "6767:6767"

    environment:
      BAZARR_PACKAGE_AUTHOR: "${VENDOR}"
      BAZARR_PACKAGE_VERSION: "${VERSION}"
      BAZARR_VERSION: "${VERSION}"
      BAZARR__PORT: "6767"

    volumes:
      - ./config:/config
```
