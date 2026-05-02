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
name: foldingathome
services:
  foldingathome:
    container_name: foldingathome
    environment:
      NVIDIA_DRIVER_CAPABILITIES: compute,video,utility
      PASSKEY: ""
      TEAM: "0"
      TZ: Etc/UTC
      USER: Anonymous
    image: ghcr.io/trueforge-org/foldingathome:8.4.9
    ports:
      - mode: ingress
        target: 7396
        published: "7396"
        protocol: tcp
      - mode: ingress
        target: 36330
        published: "36330"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
