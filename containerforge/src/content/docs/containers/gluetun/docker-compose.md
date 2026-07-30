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
name: gluetun
services:
  gluetun:
    cap_drop:
      - ALL
    container_name: gluetun
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      DOT: "on"
      FIREWALL_OUTBOUND_SUBNETS: ""
      HTTPPROXY: "off"
      LOG_LEVEL: info
      OPENVPN_PASSWORD: ""
      OPENVPN_USER: ""
      SERVER_COUNTRIES: ""
      SERVER_REGIONS: ""
      SHADOWSOCKS: "off"
      TZ: Etc/UTC
      VPN_INTERFACE: tun0
      VPN_SERVICE_PROVIDER: pia
      VPN_TYPE: openvpn
      WIREGUARD_ADDRESSES: ""
      WIREGUARD_PRIVATE_KEY: ""
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/gluetun:v3.41.3
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 8000
        published: "8000"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 8388
        published: "8388"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 8388
        published: "8388"
        protocol: udp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 8888
        published: "8888"
        protocol: tcp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/gluetun/config
        target: /config
        read_only: false
```
