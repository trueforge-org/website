---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: healthchecks
services:
  healthchecks:
    container_name: healthchecks
    environment:
      ALLOWED_HOSTS: '*'
      DEBUG: "False"
      DEFAULT_FROM_EMAIL: ""
      EMAIL_HOST: ""
      EMAIL_HOST_PASSWORD: ""
      EMAIL_HOST_USER: ""
      EMAIL_PORT: "587"
      EMAIL_USE_TLS: "true"
      SECRET_KEY: ""
      SITE_NAME: Mychecks
      SITE_ROOT: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/healthchecks:4.2
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
```
