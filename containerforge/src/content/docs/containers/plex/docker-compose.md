---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: plex
services:
  plex:
    container_name: plex
    environment:
      ADVERTISE_IP: ""
      ALLOWED_NETWORKS: ""
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
      PLEX_CLAIM: ""
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/plex:1.43.1.10611-1e34174b1
    ports:
      - mode: ingress
        target: 1900
        published: "1900"
        protocol: udp
      - mode: ingress
        target: 5353
        published: "5353"
        protocol: udp
      - mode: ingress
        target: 8324
        published: "8324"
        protocol: tcp
      - mode: ingress
        target: 32400
        published: "32400"
        protocol: tcp
      - mode: ingress
        target: 32410
        published: "32410"
        protocol: udp
      - mode: ingress
        target: 32412
        published: "32412"
        protocol: udp
      - mode: ingress
        target: 32413
        published: "32413"
        protocol: udp
      - mode: ingress
        target: 32414
        published: "32414"
        protocol: udp
      - mode: ingress
        target: 32469
        published: "32469"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
