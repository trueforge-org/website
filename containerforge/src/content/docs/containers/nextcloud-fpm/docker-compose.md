---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: nextcloud-fpm
services:
  nextcloud-fpm:
    container_name: nextcloud-fpm
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/nextcloud-fpm:33.0.2-fpm
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  postgresql:
    container_name: postgresql
    environment:
      POSTGRES_DB: postgres
      POSTGRES_PASSWORD: ""
      POSTGRES_USER: postgres
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/postgresql:18.3
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
      TZ: Etc/UTC
      VALKEY_PASSWORD: ""
    image: ghcr.io/trueforge-org/valkey:7.2.12
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
#   memcache:
#     container_name: memcache
#     environment:
#       TZ: Etc/UTC
#     image: ghcr.io/trueforge-org/memcache:1.6.24-1build3
#     ports:
#       - mode: ingress
#         target: 11211
#         published: "11211"
#         protocol: tcp
#     restart: unless-stopped
#     volumes:
#       - type: bind
#         source: config
#         target: /config
```
