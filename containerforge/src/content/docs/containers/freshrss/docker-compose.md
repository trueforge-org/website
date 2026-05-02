---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: freshrss
services:
  freshrss:
    container_name: freshrss
    environment:
      ADMIN_API_PASSWORD: MYADMINAPIPASSWORD
      ADMIN_EMAIL: ""
      ADMIN_PASSWORD: MYADMINPASSWORD
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/freshrss:1.28.1
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
#   postgresql:
#     container_name: postgresql
#     environment:
#       POSTGRES_DB: postgres
#       POSTGRES_PASSWORD: MYPOSTGRESPASSWORD
#       POSTGRES_USER: postgres
#       TZ: Etc/UTC
#     image: ghcr.io/trueforge-org/postgresql:18.3
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
