---
title: Docker-Compose
---


```yaml
name: prowlarr
services:
  prowlarr:
    container_name: prowlarr
    environment:
      DOTNET_EnableDiagnostics: "0"
      PROWLARR__SERVER__PORT: "9696"
      PROWLARR__UPDATE__BRANCH: develop
    image: ghcr.io/trueforge-org/prowlarr:2.3.6.5351
    ports:
      - mode: ingress
        target: 9696
        published: "9696"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
