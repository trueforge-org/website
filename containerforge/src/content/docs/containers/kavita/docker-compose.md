---
title: Docker-Compose
---


```yaml
name: kavita
services:
  kavita:
    container_name: kavita
    environment:
      COMPlus_EnableDiagnostics: "0"
      HOME: /config
    image: ghcr.io/trueforge-org/kavita:0.8.8.3
    ports:
      - mode: ingress
        target: 5000
        published: "5000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
