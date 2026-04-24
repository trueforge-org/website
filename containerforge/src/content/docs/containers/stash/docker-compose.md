---
title: Docker-Compose
---


```yaml
name: stash
services:
  stash:
    container_name: stash
    image: ghcr.io/trueforge-org/stash:0.31.1
    ports:
      - mode: ingress
        target: 9999
        published: "9999"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
#   postgresql:
#     container_name: postgresql
#     environment:
#       LANG: en_US.UTF-8
#       LC_ALL: en_US.UTF-8
#       PATH: /usr/lib/postgresql/${PG_MAJOR}/bin:$PATH
#       PG_MAJOR: $PG_MAJOR
#       PGDATA: /config/$PG_MAJOR
#     image: ghcr.io/trueforge-org/postgresql:18.2
#     ports:
#       - mode: ingress
#         target: 5432
#         published: "5432"
#         protocol: tcp
#     restart: unless-stopped
#     volumes:
#       - type: bind
#         source: config
#         target: /config
```
