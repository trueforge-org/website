---
title: Docker-Compose
---


```yaml
name: librespeed
services:
  librespeed:
    container_name: librespeed
    image: ghcr.io/trueforge-org/librespeed:v6.1.0
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
