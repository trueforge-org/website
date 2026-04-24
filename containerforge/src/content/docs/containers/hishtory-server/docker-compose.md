---
title: Docker-Compose
---


```yaml
name: hishtory-server
services:
  hishtory-server:
    container_name: hishtory-server
    image: ghcr.io/trueforge-org/hishtory-server:0.335
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
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
```
