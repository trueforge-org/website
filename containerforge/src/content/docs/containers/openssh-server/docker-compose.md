---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: openssh-server
services:
  openssh-server:
    container_name: openssh-server
    environment:
      PASSWORD_ACCESS: "false"
      PUBLIC_KEY: ""
      SUDO_ACCESS: "false"
      TZ: Etc/UTC
      USER_NAME: apps
      USER_PASSWORD: MYUSERPASSWORD
    image: ghcr.io/trueforge-org/openssh-server:10.2_p1-r0-ls217
    ports:
      - mode: ingress
        target: 2222
        published: "2222"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
