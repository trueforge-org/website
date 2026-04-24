---
title: Docker-Compose
---


```yaml
name: radarr
services:
  radarr:
    container_name: radarr
    environment:
      DOTNET_EnableDiagnostics: "0"
      RADARR__SERVER__PORT: "7878"
      RADARR__UPDATE__BRANCH: develop
    image: ghcr.io/trueforge-org/radarr:6.2.0.10390
    ports:
      - mode: ingress
        target: 7878
        published: "7878"
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
