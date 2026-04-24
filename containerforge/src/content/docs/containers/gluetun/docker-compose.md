---
title: Docker-Compose
---


```yaml
name: gluetun
services:
  gluetun:
    container_name: gluetun
    environment:
      VPN_INTERFACE: tun0
      VPN_SERVICE_PROVIDER: pia
      VPN_TYPE: openvpn
    image: ghcr.io/trueforge-org/gluetun:v3.41.1
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
      - mode: ingress
        target: 8388
        published: "8388"
        protocol: tcp
      - mode: ingress
        target: 8388
        published: "8388"
        protocol: udp
      - mode: ingress
        target: 8888
        published: "8888"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
