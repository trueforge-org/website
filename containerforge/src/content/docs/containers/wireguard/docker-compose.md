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
    cap_drop:
      - ALL
    container_name: wireguard
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
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
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/wireguard:1.0.20250521-r0
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 51820
        published: "51820"
        protocol: udp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/wireguard/config
        target: /config
        read_only: false
```
