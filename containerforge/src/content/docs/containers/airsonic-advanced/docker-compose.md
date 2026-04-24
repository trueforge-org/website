---
title: Docker-Compose
---


```yaml
name: airsonic-advanced
services:
  airsonic-advanced:
    container_name: airsonic-advanced
    environment:
      AIRSONIC_ADVANCED_HOME: /app
      AIRSONIC_ADVANCED_SETTINGS: /config
      LANG: C.UTF-8
    image: ghcr.io/trueforge-org/airsonic-advanced:11.1.4
    ports:
      - mode: ingress
        target: 4040
        published: "4040"
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
#   mariadb:
#     container_name: mariadb
#     environment:
#       DATADIR: $MYSQL_DIR/databases
#       MYSQL_DIR: /config
#     image: ghcr.io/trueforge-org/mariadb:11.4.8-r0
#     ports:
#       - mode: ingress
#         target: 3306
#         published: "3306"
#         protocol: tcp
#     restart: unless-stopped
#     volumes:
#       - type: bind
#         source: config
#         target: /config
```
