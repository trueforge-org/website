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
name: socket-proxy
services:
  socket-proxy:
    cap_drop:
      - ALL
    container_name: socket-proxy
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      ALLOW_RESTARTS: "0"
      ALLOW_START: "0"
      ALLOW_STOP: "0"
      AUTH: "0"
      BUILD: "0"
      COMMIT: "0"
      CONFIGS: "0"
      CONTAINERS: "0"
      DISTRIBUTION: "0"
      EVENTS: "1"
      EXEC: "0"
      IMAGES: "0"
      INFO: "0"
      LOG_LEVEL: info
      NETWORKS: "0"
      NODES: "0"
      PING: "1"
      PLUGINS: "0"
      POST: "0"
      SECRETS: "0"
      SERVICES: "0"
      SESSION: "0"
      SOCKET_PATH: /var/run/docker.sock
      SWARM: "0"
      SYSTEM: "0"
      TASKS: "0"
      VERSION: "1"
      VOLUMES: "0"
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/socket-proxy:3.2.13-r0-ls70
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/socket-proxy/config
        target: /config
        read_only: false
```
