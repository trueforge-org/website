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
name: ngircd
services:
  ngircd:
    cap_drop:
      - ALL
    container_name: ngircd
    privileged: false
    deploy:
      resources:
        limits:
          cpus: 4
          memory: 4G
    environment:
      IRC_NETWORK_NAME: ExampleNet
      IRC_SERVER_NAME: irc.example.net
      TZ: Etc/UTC
    group_add:
      - "568"
    image: ghcr.io/trueforge-org/ngircd:27-r1-ls163
    ports:
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 6667
        published: "6667"
        protocol: tcp
      - mode: ingress
        # host_ip: 127.0.0.1
        target: 6697
        published: "6697"
        protocol: tcp
    restart: unless-stopped
    shm_size: 256M
    volumes:
      - type: bind
        source: /mnt/tank/apps/ngircd/config
        target: /config
        read_only: false
```
