---
title: Docker-Compose
---


```yaml
name: wikijs
services:
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
  wikijs:
    container_name: wikijs
    environment:
      HOME: /app
      NODE_ENV: production
    image: ghcr.io/trueforge-org/wikijs:2.5.312
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
