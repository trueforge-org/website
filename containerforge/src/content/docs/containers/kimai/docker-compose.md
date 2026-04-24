---
title: Docker-Compose
---


```yaml
name: kimai
services:
  kimai:
    container_name: kimai
    image: ghcr.io/trueforge-org/kimai:2.55.0
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
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
