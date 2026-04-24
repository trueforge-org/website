---
title: Docker-Compose
---


```yaml
name: duplicati
services:
  duplicati:
    container_name: duplicati
    environment:
      DUPLICATI__REQUIRE_DB_ENCRYPTION_KEY: "true"
      DUPLICATI__SERVER_DATAFOLDER: /config
      DUPLICATI__WEBSERVICE_ALLOWED_HOSTNAMES: '*'
      DUPLICATI__WEBSERVICE_INTERFACE: any
      DUPLICATI__WEBSERVICE_PORT: "8200"
      HOME: /config
    image: ghcr.io/trueforge-org/duplicati:2.3.0.0_stable_2026-04-14
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
