---
title: Docker-Compose
---


```yaml
name: readarr
services:
  readarr:
    container_name: readarr
    environment:
      COMPlus_EnableDiagnostics: "0"
      READARR__SERVER__PORT: "8787"
      READARR__UPDATE__BRANCH: develop
    image: ghcr.io/trueforge-org/readarr:0.4.18.2805
    ports:
      - mode: ingress
        target: 8787
        published: "8787"
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
