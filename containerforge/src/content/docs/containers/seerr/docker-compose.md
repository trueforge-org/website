---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: seerr
services:
  seerr:
    container_name: seerr
    environment:
      LOG_LEVEL: info
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/seerr:3.2.0
    ports:
      - mode: ingress
        target: 5055
        published: "5055"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
