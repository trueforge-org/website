---
title: Docker-Compose
---


```yaml
name: bazarr
services:
  bazarr:
    container_name: bazarr
    environment:
      BAZARR__PORT: "6767"
      BAZARR_PACKAGE_AUTHOR: ${VENDOR}
      BAZARR_PACKAGE_VERSION: ${VERSION}
      BAZARR_VERSION: ${VERSION}
    image: ghcr.io/trueforge-org/bazarr:v1.5.6
    ports:
      - mode: ingress
        target: 6767
        published: "6767"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
