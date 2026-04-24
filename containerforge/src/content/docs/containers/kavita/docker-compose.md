---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: kavita
services:
  kavita:
    container_name: kavita
    environment:
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/kavita:0.8.8.3
    ports:
      - mode: ingress
        target: 5000
        published: "5000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
