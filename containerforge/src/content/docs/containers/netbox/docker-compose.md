---
title: Docker-Compose
---

:::warning

These settings are best-effort and will likely require additional work to implement

:::

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

Source: [{{ SOURCE }}]({{ SOURCE }})

## docker-compose.yaml

```yaml
name: netbox
services:
  netbox:
    container_name: netbox
    environment:
      ALLOWED_HOSTS: '*'
      SECRET_KEY: ""
      SUPERUSER_EMAIL: ""
      SUPERUSER_NAME: admin
      SUPERUSER_PASSWORD: MYSUPERUSERPASSWORD
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/netbox:4.5.9
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
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
      POSTGRES_PASSWORD: MYPOSTGRESPASSWORD
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
      VALKEY_PASSWORD: MYVALKEYPASSWORD
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
