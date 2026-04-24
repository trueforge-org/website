---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: resilio-sync
services:
  resilio-sync:
    container_name: resilio-sync
    environment:
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/resilio-sync:3.1.2.1076
    ports:
      - mode: ingress
        target: 8888
        published: "8888"
        protocol: tcp
      - mode: ingress
        target: 55555
        published: "55555"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
      - type: bind
        source: sync
        target: /sync
```
