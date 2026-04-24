---
title: Docker-Compose
---


```yaml
name: syslog-ng
services:
  syslog-ng:
    container_name: syslog-ng
    image: ghcr.io/trueforge-org/syslog-ng:4.10.2-r1-ls184
    ports:
      - mode: ingress
        target: 5514
        published: "5514"
        protocol: udp
      - mode: ingress
        target: 6514
        published: "6514"
        protocol: tcp
      - mode: ingress
        target: 6601
        published: "6601"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
