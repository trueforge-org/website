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
name: home-assistant
services:
  home-assistant:
    container_name: home-assistant
    environment:
      TZ: Etc/UTC
      WHEELS_LINKS: https://wheels.home-assistant.io/musllinux/
    image: ghcr.io/trueforge-org/home-assistant:2026.4.4
    ports:
      - mode: ingress
        target: 8123
        published: "8123"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
