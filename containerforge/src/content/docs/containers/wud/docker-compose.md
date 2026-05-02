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
name: wud
services:
  wud:
    container_name: wud
    environment:
      TZ: Etc/UTC
      WUD_LOG_FORMAT: text
      WUD_REGISTRY_CUSTOM_TRUEFORGE_URL: https://oci.trueforge.org
      WUD_WATCHER_local_WATCHBYDEFAULT: "false"
    image: ghcr.io/trueforge-org/wud:8.2.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
