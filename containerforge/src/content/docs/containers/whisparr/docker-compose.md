---
title: Docker-Compose
---


```yaml
name: whisparr
services:
  whisparr:
    container_name: whisparr
    environment:
      COMPlus_EnableDiagnostics: "0"
      WHISPARR__SERVER__PORT: "6969"
      WHISPARR__UPDATE__BRANCH: eros
    image: ghcr.io/trueforge-org/whisparr:3.1.0.2116
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
