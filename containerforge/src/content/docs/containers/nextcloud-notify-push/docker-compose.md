---
title: Docker-Compose
---


```yaml
name: nextcloud-notify-push
services:
  nextcloud-fpm:
    container_name: nextcloud-fpm
    image: ghcr.io/trueforge-org/nextcloud-fpm:33.0.2-fpm
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  nextcloud-notify-push:
    container_name: nextcloud-notify-push
    image: ghcr.io/trueforge-org/nextcloud-notify-push:1.3.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  postgresql:
    container_name: postgresql
    environment:
      LANG: en_US.UTF-8
      LC_ALL: en_US.UTF-8
      PATH: /usr/lib/postgresql/${PG_MAJOR}/bin:$PATH
      PG_MAJOR: $PG_MAJOR
      PGDATA: /config/$PG_MAJOR
    image: ghcr.io/trueforge-org/postgresql:18.2
    ports:
      - mode: ingress
        target: 5432
        published: "5432"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  valkey:
    container_name: valkey
    environment:
      VALKEY_PORT: "6379"
    image: ghcr.io/trueforge-org/valkey:7.2.11
    ports:
      - mode: ingress
        target: 6379
        published: "6379"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
