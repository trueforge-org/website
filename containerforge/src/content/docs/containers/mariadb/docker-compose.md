---
title: Docker Compose
---

Example `docker-compose.yaml` for **mariadb**:

```yaml
version: "3.9"

services:
  mariadb:
    image: ghcr.io/trueforge-org/mariadb:11.4.8-r0
    container_name: mariadb
    restart: unless-stopped

    ports:
      - "3306:3306"

    environment:
      DATADIR: "$MYSQL_DIR/databases"
      MYSQL_DIR: "/config"

    volumes:
      - ./config:/config
```
