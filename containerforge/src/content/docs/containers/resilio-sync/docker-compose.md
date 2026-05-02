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
name: resilio-sync
services:
  resilio-sync:
    cap_drop:
      - ALL
    container_name: resilio-sync
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      TZ: Etc/UTC
      UMASK: "002"
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/resilio-sync:3.1.2.1076
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 8888
        published: "8888"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 55555
        published: "55555"
        protocol: tcp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/resilio-sync/config
        target: /config
        read_only: false
      - type: bind
        source: /mnt/tank/apps/resilio-sync/sync
        target: /sync
        read_only: false
```
