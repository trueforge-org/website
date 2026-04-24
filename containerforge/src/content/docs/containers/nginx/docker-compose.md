---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: nginx
services:
  nginx:
    container_name: nginx
    environment:
      NGINX_PORT: "8080"
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/nginx:1.24.0-2ubuntu7.6
    ports:
      - mode: ingress
        target: 8080
        published: "8080"
        protocol: tcp
      - mode: ingress
        target: 8443
        published: "8443"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
