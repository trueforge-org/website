---
title: Docker-Compose
---


```yaml
name: znc
services:
  znc:
    container_name: znc
    environment:
      MAKEFLAGS: -j4
    image: ghcr.io/trueforge-org/znc:znc-1.10.1
    ports:
      - mode: ingress
        target: 6501
        published: "6501"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
