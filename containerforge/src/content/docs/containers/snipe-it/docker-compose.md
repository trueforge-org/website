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
name: snipe-it
services:
  mariadb:
    container_name: mariadb
    environment:
      MARIADB_DATABASE: ""
      MARIADB_PASSWORD: MYMARIADBPASSWORD
      MARIADB_ROOT_PASSWORD: MYMARIADBROOTPASSWORD
      MARIADB_USER: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/mariadb:11.4.8-r0
    ports:
      - mode: ingress
        target: 3306
        published: "3306"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
  snipe-it:
    container_name: snipe-it
    environment:
      APP_KEY: ""
      APP_LOCALE: en
      APP_TIMEZONE: UTC
      APP_URL: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/snipe-it:8.4.1
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
