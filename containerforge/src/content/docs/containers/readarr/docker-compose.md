---
title: Docker-Compose
---


```yaml
name: readarr
services:
  readarr:
    container_name: readarr
    environment:
      COMPlus_EnableDiagnostics: "0"
      READARR__SERVER__PORT: "8787"
      READARR__UPDATE__BRANCH: develop
    image: ghcr.io/trueforge-org/readarr:0.4.18.2805
    ports:
      - mode: ingress
        target: 8787
        published: "8787"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
