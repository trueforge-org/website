---
title: Docker-Compose
---


```yaml
name: xbackbone
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
  xbackbone:
    container_name: xbackbone
    image: ghcr.io/trueforge-org/xbackbone:3.8.1
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
```
