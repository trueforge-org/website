---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: flexget
services:
  flexget:
    container_name: flexget
    environment:
      FG_CONFIG_FILE: /config/config.yml
      FG_LOG_LEVEL: info
      FG_WEBUI_PASSWORD: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/flexget:3.18.24
    ports:
      - mode: ingress
        target: 5050
        published: "5050"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
