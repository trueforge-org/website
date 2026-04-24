---
title: Docker-Compose
---


```yaml
name: plex
services:
  plex:
    container_name: plex
    environment:
      Container: (${VENDOR})
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
      PLEX_MEDIA_SERVER_APPLICATION_SUPPORT_DIR: /config/Library/Application
      PLEX_MEDIA_SERVER_INFO_DEVICE: Docker
      PLEX_MEDIA_SERVER_INFO_VENDOR: Docker
      PLEX_MEDIA_SERVER_MAX_PLUGIN_PROCS: "6"
      Support": PLEX_MEDIA_SERVER_HOME="/usr/lib/plexmediaserver
    image: ghcr.io/trueforge-org/plex:1.43.1.10611-1e34174b1
    ports:
      - mode: ingress
        target: 32400
        published: "32400"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
