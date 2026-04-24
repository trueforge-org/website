---
title: Docker Compose
---

Example `docker-compose.yaml` for **postgresql**:

```yaml
version: "3.9"

services:
  postgresql:
    image: ghcr.io/trueforge-org/postgresql:18.2
    container_name: postgresql
    restart: unless-stopped

    ports:
      - "5432:5432"

    environment:
      LANG: "en_US.UTF-8"
      LC_ALL: "en_US.UTF-8"
      PATH: "/usr/lib/postgresql/${PG_MAJOR}/bin:$PATH"
      PGDATA: "/config/$PG_MAJOR"
      PG_MAJOR: "$PG_MAJOR"

    volumes:
      - ./config:/config
```
