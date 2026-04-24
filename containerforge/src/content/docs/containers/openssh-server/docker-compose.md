---
title: Docker-Compose
---


```yaml
name: openssh-server
services:
  openssh-server:
    container_name: openssh-server
    image: ghcr.io/trueforge-org/openssh-server:10.2_p1-r0-ls217
    ports:
      - mode: ingress
        target: 2222
        published: "2222"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
