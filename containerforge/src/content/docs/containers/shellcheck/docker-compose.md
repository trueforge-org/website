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
name: shellcheck
services:
  shellcheck:
    container_name: shellcheck
    image: ghcr.io/trueforge-org/shellcheck:0.11.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
