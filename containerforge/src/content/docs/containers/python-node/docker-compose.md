---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: python-node
services:
  python-node:
    container_name: python-node
    image: ghcr.io/trueforge-org/python-node:3.14.4
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
