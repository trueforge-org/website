---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: emby
services:
  emby:
    container_name: emby
    environment:
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
      PUBLISHED_SERVER_URL: ""
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/emby:4.10.0.11
    ports:
      - mode: ingress
        target: 1900
        published: "1900"
        protocol: udp
      - mode: ingress
        target: 7359
        published: "7359"
        protocol: udp
      - mode: ingress
        target: 8096
        published: "8096"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
