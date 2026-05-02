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
name: unifi-network-application
services:
  unifi-network-application:
    container_name: unifi-network-application
    environment:
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/unifi-network-application:10.3.58
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
      - mode: ingress
        target: 8443
        published: "8443"
        protocol: tcp
      - mode: ingress
        target: 8843
        published: "8843"
        protocol: tcp
      - mode: ingress
        target: 8880
        published: "8880"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
