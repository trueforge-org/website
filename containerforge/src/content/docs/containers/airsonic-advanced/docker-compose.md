---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: airsonic-advanced
services:
  airsonic-advanced:
    container_name: airsonic-advanced
    environment:
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/airsonic-advanced:11.1.4
    ports:
      - mode: ingress
        target: 4040
        published: "4040"
        protocol: tcp
      - mode: ingress
        target: 4041
        published: "4041"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
#   postgresql:
#     container_name: postgresql
#     environment:
#       POSTGRES_DB: postgres
#       POSTGRES_PASSWORD: ""
#       POSTGRES_USER: postgres
#       TZ: Etc/UTC
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
#       MARIADB_DATABASE: ""
#       MARIADB_PASSWORD: ""
#       MARIADB_ROOT_PASSWORD: ""
#       MARIADB_USER: ""
#       TZ: Etc/UTC
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
