---
title: Docker-Compose
---


```yaml
name: nzbhydra2
services:
  nzbhydra2:
    container_name: nzbhydra2
    environment:
      JAVA_TOOL_OPTIONS: -Xmx256M
    image: ghcr.io/trueforge-org/nzbhydra2:v8.7.1
    ports:
      - mode: ingress
        target: 5076
        published: "5076"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
