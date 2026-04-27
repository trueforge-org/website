---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: minetest
services:
  minetest:
    container_name: minetest
    environment:
      CLI_ARGS: ""
      DATA_DIR: /config/.minetest
      GAME_ID: minetest
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/minetest:5.10.0
    ports:
      - mode: ingress
        target: 30000
        published: "30000"
        protocol: udp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
