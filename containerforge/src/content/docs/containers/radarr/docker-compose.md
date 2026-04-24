---
title: Docker-Compose
---


```yaml
name: radarr
services:
  radarr:
    container_name: radarr
    environment:
      DOTNET_EnableDiagnostics: "0"
      RADARR__SERVER__PORT: "7878"
      RADARR__UPDATE__BRANCH: develop
    image: ghcr.io/trueforge-org/radarr:6.2.0.10390
    ports:
      - mode: ingress
        target: 7878
        published: "7878"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
