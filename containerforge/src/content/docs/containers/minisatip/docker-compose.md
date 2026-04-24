---
title: Docker-Compose
---


```yaml
name: minisatip
services:
  minisatip:
    container_name: minisatip
    environment:
      -type: c
      ATTACHED_DEVICES_PERMS: /dev/dvb
      MAKEFLAGS: -j4
    image: ghcr.io/trueforge-org/minisatip:2.0.79
    ports:
      - mode: ingress
        target: 554
        published: "554"
        protocol: tcp
      - mode: ingress
        target: 1900
        published: "1900"
        protocol: udp
      - mode: ingress
        target: 8875
        published: "8875"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
