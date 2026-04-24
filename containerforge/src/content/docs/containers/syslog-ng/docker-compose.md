---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: syslog-ng
services:
  syslog-ng:
    container_name: syslog-ng
    environment:
      EXTRA_ARGS: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/syslog-ng:4.10.2-r1-ls184
    ports:
      - mode: ingress
        target: 5514
        published: "5514"
        protocol: udp
      - mode: ingress
        target: 6514
        published: "6514"
        protocol: tcp
      - mode: ingress
        target: 6601
        published: "6601"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
