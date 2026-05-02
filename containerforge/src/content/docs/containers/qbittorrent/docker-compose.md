---
title: Docker-Compose
---

:::warning

These settings are best-effort and will likely require additional work to implement

:::

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

Source: [{{ SOURCE }}]({{ SOURCE }})

## docker-compose.yaml

```yaml
name: qbittorrent
services:
  qbittorrent:
    container_name: qbittorrent
    environment:
      QBT_WEBUI_PORT: "8080"
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/qbittorrent:5.1.4
    ports:
      - mode: ingress
        target: 6881
        published: "6881"
        protocol: tcp
      - mode: ingress
        target: 6881
        published: "6881"
        protocol: udp
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
