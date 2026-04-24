---
title: Docker-Compose
---


```yaml
name: projectsend
services:
  projectsend:
    container_name: projectsend
    image: ghcr.io/trueforge-org/projectsend:r1945
    ports:
      - mode: ingress
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
