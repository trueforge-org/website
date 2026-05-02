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
name: syslog-ng
services:
  syslog-ng:
    cap_drop:
      - ALL
    container_name: syslog-ng
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      EXTRA_ARGS: ""
      TZ: Etc/UTC
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/syslog-ng:4.10.2-r1-ls184
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 5514
        published: "5514"
        protocol: udp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 6514
        published: "6514"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 6601
        published: "6601"
        protocol: tcp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/syslog-ng/config
        target: /config
        read_only: false
```
