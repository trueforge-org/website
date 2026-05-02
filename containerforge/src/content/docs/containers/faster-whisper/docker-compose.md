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
name: faster-whisper
services:
  faster-whisper:
    container_name: faster-whisper
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/faster-whisper:3.0.2
    ports:
      - mode: ingress
        target: 10300
        published: "10300"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
