---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: renovate
services:
  renovate:
    container_name: renovate
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/renovate:43.142.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
