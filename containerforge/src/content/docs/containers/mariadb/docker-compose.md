---
title: Docker-Compose
---


```yaml
name: mariadb
services:
  mariadb:
    container_name: mariadb
    environment:
      DATADIR: $MYSQL_DIR/databases
      MYSQL_DIR: /config
    image: ghcr.io/trueforge-org/mariadb:11.4.8-r0
    ports:
      - mode: ingress
        target: 3306
        published: "3306"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
