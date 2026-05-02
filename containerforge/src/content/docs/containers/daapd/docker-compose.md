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
name: daapd
services:
  daapd:
    container_name: daapd
    environment:
      ENABLE_MDNS: "true"
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/daapd:28.10
    ports:
      - mode: ingress
        target: 3689
        published: "3689"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
      - type: bind
        source: music
        target: /music
```
