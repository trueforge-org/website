---
title: Docker-Compose
---


```yaml
name: ldap-auth
services:
  ldap-auth:
    container_name: ldap-auth
    image: ghcr.io/trueforge-org/ldap-auth:3.4.5
    ports:
      - mode: ingress
        target: 8888
        published: "8888"
        protocol: tcp
      - mode: ingress
        target: 9000
        published: "9000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
