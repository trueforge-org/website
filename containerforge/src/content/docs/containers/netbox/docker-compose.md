---
title: Docker-Compose
---


```yaml
name: netbox
services:
  netbox:
    container_name: netbox
    image: ghcr.io/trueforge-org/netbox:4.5.8
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
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
