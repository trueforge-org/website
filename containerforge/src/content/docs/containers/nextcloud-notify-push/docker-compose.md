---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: nextcloud-notify-push
services:
  nextcloud-fpm:
    container_name: nextcloud-fpm
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/nextcloud-fpm:33.0.3-fpm
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  nextcloud-notify-push:
    container_name: nextcloud-notify-push
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/nextcloud-notify-push:1.3.1
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
  valkey:
    container_name: valkey
    environment:
      TZ: Etc/UTC
      VALKEY_PASSWORD: ""
    image: ghcr.io/trueforge-org/valkey:7.2.12
    ports:
      - mode: ingress
        target: 6379
        published: "6379"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
