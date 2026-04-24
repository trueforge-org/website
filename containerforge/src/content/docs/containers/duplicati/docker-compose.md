---
title: Docker Compose
---

Example `docker-compose.yaml` for **duplicati**:

```yaml
version: "3.9"

services:
  duplicati:
    image: ghcr.io/trueforge-org/duplicati:2.3.0.0_stable_2026-04-14
    container_name: duplicati
    restart: unless-stopped

    ports:
      - "8200:8200"

    environment:
      DUPLICATI__REQUIRE_DB_ENCRYPTION_KEY: "true"
      DUPLICATI__SERVER_DATAFOLDER: "/config"
      DUPLICATI__WEBSERVICE_ALLOWED_HOSTNAMES: "*"
      DUPLICATI__WEBSERVICE_INTERFACE: "any"
      DUPLICATI__WEBSERVICE_PORT: "8200"
      HOME: "/config"

    volumes:
      - ./backups:/backups
      - ./config:/config
      - ./source:/source
```
