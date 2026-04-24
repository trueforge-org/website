---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: pwndrop
services:
  pwndrop:
    container_name: pwndrop
    environment:
      EXTERNAL_URL: ""
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/pwndrop:1.0.1
    ports:
      - mode: ingress
        target: 4443
        published: "4443"
        protocol: tcp
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
