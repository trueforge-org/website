---
title: Docker-Compose
---


```yaml
name: unifi-network-application
services:
  unifi-network-application:
    container_name: unifi-network-application
    environment:
      DEBIAN_FRONTEND: noninteractive
    image: ghcr.io/trueforge-org/unifi-network-application:10.3.55
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
      - mode: ingress
        target: 8443
        published: "8443"
        protocol: tcp
      - mode: ingress
        target: 8843
        published: "8843"
        protocol: tcp
      - mode: ingress
        target: 8880
        published: "8880"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
