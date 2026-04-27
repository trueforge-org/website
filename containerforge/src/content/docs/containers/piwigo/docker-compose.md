---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: piwigo
services:
  piwigo:
    container_name: piwigo
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/piwigo:15.7.0
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
      - type: bind
        source: gallery
        target: /gallery
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
