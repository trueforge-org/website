---
title: Docker-Compose
---


```yaml
name: sonarr
services:
  sonarr:
    container_name: sonarr
    environment:
      DOTNET_EnableDiagnostics: "0"
      SONARR__SERVER__PORT: "8989"
      SONARR__UPDATE__BRANCH: develop
    image: ghcr.io/trueforge-org/sonarr:4.0.17.2953
    ports:
      - mode: ingress
        target: 8989
        published: "8989"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
