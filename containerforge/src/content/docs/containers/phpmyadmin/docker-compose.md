---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: phpmyadmin
services:
  phpmyadmin:
    container_name: phpmyadmin
    environment:
      MAX_EXECUTION_TIME: "600"
      MEMORY_LIMIT: 512M
      PMA_CONFIG_BASE64: ""
      PMA_USER_CONFIG_BASE64: ""
      TZ: Etc/UTC
      UPLOAD_LIMIT: 8192K
    image: ghcr.io/trueforge-org/phpmyadmin:5.2.3
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
