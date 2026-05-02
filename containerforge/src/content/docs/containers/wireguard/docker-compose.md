---
title: Docker-Compose
---

:::warning

These settings are best-effort and will likely require additional work to implement

:::

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

Source: [{{ SOURCE }}]({{ SOURCE }})

## docker-compose.yaml

```yaml
name: wireguard
services:
  wireguard:
    container_name: wireguard
    environment:
      ALLOWEDIPS: 0.0.0.0/0
      INTERNAL_SUBNET: 10.13.13.0
      LOG_CONFS: "true"
      PEERDNS: auto
      PEERS: "1"
      PERSISTENTKEEPALIVE_PEERS: ""
      SERVERPORT: "51820"
      SERVERURL: auto
      TZ: Etc/UTC
      USE_COREDNS: "false"
    image: ghcr.io/trueforge-org/wireguard:1.0.20250521-r0
    ports:
      - mode: ingress
        target: 51820
        published: "51820"
        protocol: udp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
