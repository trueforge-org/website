---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: whisparr
services:
  whisparr:
    container_name: whisparr
    environment:
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/whisparr:2.2.0-release.108
    ports:
      - mode: ingress
        target: 6969
        published: "6969"
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
