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
name: freshrss
services:
  freshrss:
    cap_drop:
      - ALL
    container_name: freshrss
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      ADMIN_API_PASSWORD: 6064ccaf6f1509e9641f19baf6e26f30WORD
      ADMIN_EMAIL: ""
      ADMIN_PASSWORD: f5996a7b06fb2228091e1ad92df894b5WORD
      TZ: Etc/UTC
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/freshrss:1.28.1
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 80
        published: "80"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 443
        published: "443"
        protocol: tcp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/freshrss/config
        target: /config
        read_only: false
#   postgresql:
#     cap_drop:
#       - ALL
#     container_name: postgresql
#     deploy:
#       resources:
#         limits:
#           cpus: 4
#           memory: "4294967296"
#     environment:
#       POSTGRES_DB: freshrss
#       POSTGRES_PASSWORD: 906d8e9ec2b03ba950231e4900cfebc7WORD
#       POSTGRES_USER: freshrss
#       TZ: Etc/UTC
#     group_add:
#       - "568"
#     image: ghcr.io/trueforge-org/postgresql:18.3
#     ports:
#       - mode: ingress
#         host_ip: 127.0.0.1
#         target: 5432
#         published: "5432"
#         protocol: tcp
#     restart: unless-stopped
#     shm_size: "268435456"
#     volumes:
#       - type: bind
#         source: /mnt/tank/apps/postgresql/config
#         target: /config
```
