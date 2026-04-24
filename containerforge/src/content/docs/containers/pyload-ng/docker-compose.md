---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: pyload-ng
services:
  pyload-ng:
    container_name: pyload-ng
    environment:
      PYLOAD_PASSWORD: pyload
      PYLOAD_USERNAME: pyload
      TZ: Etc/UTC
      UMASK: "002"
    image: ghcr.io/trueforge-org/pyload-ng:0.5.0b3.dev93
    ports:
      - mode: ingress
        target: 8000
        published: "8000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
