---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: k8s-sidecar
services:
  k8s-sidecar:
    container_name: k8s-sidecar
    environment:
      FOLDER: /tmp/
      LABEL: ""
      METHOD: WATCH
      NAMESPACE: ALL
      RESOURCE: configmap
    image: ghcr.io/trueforge-org/k8s-sidecar:2.7.1
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
