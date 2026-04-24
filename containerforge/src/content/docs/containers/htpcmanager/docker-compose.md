---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: htpcmanager
services:
  htpcmanager:
    container_name: htpcmanager
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/htpcmanager:26a641bf
    ports:
      - mode: ingress
        target: 8085
        published: "8085"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
