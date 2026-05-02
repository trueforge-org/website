---
title: Docker-Compose
---

:::warning

These settings are best-effort and will likely require additional work to implement

:::

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

Source: [{{ SOURCE }}]({{ SOURCE }})

## docker-compose.yaml

```yaml
name: bookstack
services:
  bookstack:
    cap_drop:
      - ALL
    container_name: bookstack
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      APP_KEY: ""
      APP_URL: ""
      DB_DATABASE: bookstack
      DB_HOST: ""
      DB_PASS: 4ba5310db1da4842d8c89508bfd03e86WORD
      DB_PORT: "3306"
      DB_USER: bookstack
      TZ: Etc/UTC
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/bookstack:25.11.1
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/bookstack/config
        target: /config
        read_only: false
#   mariadb:
#     cap_drop:
#       - ALL
#     container_name: mariadb
#     deploy:
#       resources:
#         limits:
#           cpus: 4
#           memory: "4294967296"
#     environment:
#       MARIADB_DATABASE: bookstack
#       MARIADB_PASSWORD: 4ba5310db1da4842d8c89508bfd03e86WORD
#       MARIADB_ROOT_PASSWORD: 95d35aa0152c4ef2de0cba046a0c98c4WORD
#       MARIADB_USER: bookstack
#       TZ: Etc/UTC
#     group_add:
#       - "568"
#     image: ghcr.io/trueforge-org/mariadb:11.4.8-r0
#     ports:
#       - mode: ingress
#         host_ip: 127.0.0.1
#         target: 3306
#         published: "3306"
#         protocol: tcp
#     restart: unless-stopped
#     shm_size: "268435456"
#     volumes:
#       - type: bind
#         source: /mnt/tank/apps/mariadb/config
#         target: /config
```
