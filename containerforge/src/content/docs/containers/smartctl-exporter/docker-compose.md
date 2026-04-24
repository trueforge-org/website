---
title: Docker-Compose
---


```yaml
name: smartctl-exporter
services:
  smartctl-exporter:
    container_name: smartctl-exporter
    image: ghcr.io/trueforge-org/smartctl-exporter:0.14.0
    ports:
      - mode: ingress
        target: 9633
        published: "9633"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
