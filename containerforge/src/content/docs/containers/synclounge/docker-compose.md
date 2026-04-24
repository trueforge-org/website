---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: synclounge
services:
  synclounge:
    container_name: synclounge
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/synclounge:5.2.35
    ports:
      - mode: ingress
        target: 8088
        published: "8088"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
