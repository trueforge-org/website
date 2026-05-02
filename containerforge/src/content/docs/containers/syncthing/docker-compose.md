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
name: syncthing
services:
  syncthing:
    container_name: syncthing
    environment:
      STGUIADDRESS: 0.0.0.0:8384
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/syncthing:2.0.16
    ports:
      - mode: ingress
        target: 8384
        published: "8384"
        protocol: tcp
      - mode: ingress
        target: 21027
        published: "21027"
        protocol: udp
      - mode: ingress
        target: 22000
        published: "22000"
        protocol: tcp
      - mode: ingress
        target: 22000
        published: "22000"
        protocol: udp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
