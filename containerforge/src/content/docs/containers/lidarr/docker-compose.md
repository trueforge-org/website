---
title: Docker-Compose
---


```yaml
name: lidarr
services:
  lidarr:
    container_name: lidarr
    environment:
      DOTNET_EnableDiagnostics: "0"
      LIDARR__SERVER__PORT: "8686"
      LIDARR__UPDATE__BRANCH: develop
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
```
