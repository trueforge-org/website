---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: transmission
services:
  transmission:
    container_name: transmission
    environment:
      TRANSMISSION_PEER_PORT: "51413"
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/transmission:4.0.5-1build5
    ports:
      - mode: ingress
        target: 9091
        published: "9091"
        protocol: tcp
      - mode: ingress
        target: 51413
        published: "51413"
        protocol: tcp
      - mode: ingress
        target: 51413
        published: "51413"
        protocol: udp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
