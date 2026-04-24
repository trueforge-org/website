---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: duplicati
services:
  duplicati:
    container_name: duplicati
    environment:
      DUPLICATI__REQUIRE_DB_ENCRYPTION_KEY: "true"
      DUPLICATI__WEBSERVICE_ALLOWED_HOSTNAMES: '*'
      DUPLICATI__WEBSERVICE_INTERFACE: any
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/duplicati:2.3.0.1_stable_2026-04-24
    ports:
      - mode: ingress
        target: 8200
        published: "8200"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: backups
        target: /backups
      - type: bind
        source: config
        target: /config
      - type: bind
        source: source
        target: /source
```
