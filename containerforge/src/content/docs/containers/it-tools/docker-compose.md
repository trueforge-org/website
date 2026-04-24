---
title: Docker-Compose
---


```yaml
name: it-tools
services:
  it-tools:
    container_name: it-tools
    environment:
      HOME: /tmp
    image: ghcr.io/trueforge-org/it-tools:v2024.10.22-7ca5933
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
