---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: esphome
services:
  esphome:
    container_name: esphome
    environment:
      ESPHOME_DASHBOARD_RELATIVE_URL: /
      ESPHOME_DASHBOARD_USE_PING: "false"
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/esphome:2026.4.2
    ports:
      - mode: ingress
        target: 5353
        published: "5353"
        protocol: udp
      - mode: ingress
        target: 6052
        published: "6052"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
