---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: smartctl-exporter
services:
  smartctl-exporter:
    container_name: smartctl-exporter
    environment:
      SMARTCTL_EXPORTER_LOG_LEVEL: info
    image: ghcr.io/trueforge-org/smartctl-exporter:0.14.0
    ports:
      - mode: ingress
        target: 9633
        published: "9633"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
