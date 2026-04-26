---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: hedgedoc
services:
  hedgedoc:
    container_name: hedgedoc
    environment:
      CMD_ALLOW_ANONYMOUS: "true"
      CMD_ALLOW_FREEURL: "false"
      CMD_DOMAIN: ""
      CMD_PROTOCOL_USESSL: "false"
      CMD_SESSION_SECRET: ""
      CMD_URL_ADDPORT: "false"
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/hedgedoc:1.10.8
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  postgresql:
    container_name: postgresql
    environment:
      POSTGRES_DB: postgres
      POSTGRES_PASSWORD: ""
      POSTGRES_USER: postgres
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/postgresql:18.3
    ports:
      - mode: ingress
        target: 5432
        published: "5432"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
