---
title: Docker-Compose
---


```yaml
name: ombi
services:
  ombi:
    container_name: ombi
    environment:
      COMPlus_EnableDiagnostics: "0"
      HOME: /config
    image: ghcr.io/trueforge-org/ombi:4.53.5
    ports:
      - mode: ingress
        target: 3579
        published: "3579"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
