---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: deluge
services:
  deluge:
    container_name: deluge
    environment:
      DELUGE_LOGLEVEL: info
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/deluge:2.2.0
    ports:
      - mode: ingress
        target: 8112
        published: "8112"
        protocol: tcp
      - mode: ingress
        target: 58846
        published: "58846"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
