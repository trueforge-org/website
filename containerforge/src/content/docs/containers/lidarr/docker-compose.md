---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: lidarr
services:
  lidarr:
    container_name: lidarr
    environment:
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/lidarr:3.1.2.4938
    ports:
      - mode: ingress
        target: 8686
        published: "8686"
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
```
