---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: speedtest-tracker
services:
  speedtest-tracker:
    container_name: speedtest-tracker
    environment:
      APP_KEY: ""
      APP_URL: ""
      DB_CONNECTION: sqlite
      DB_DATABASE: ""
      DB_HOST: ""
      DB_PASSWORD: MYPOSTGRESPASSWORD
      DB_PORT: ""
      DB_USERNAME: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/speedtest-tracker:1.14.0
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
