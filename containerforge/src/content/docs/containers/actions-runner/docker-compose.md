---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: actions-runner
services:
  actions-runner:
    container_name: actions-runner
    environment:
      RUNNER_LABELS: ""
      RUNNER_NAME: ""
      RUNNER_REPOSITORY_URL: ""
      RUNNER_TOKEN: ""
      RUNNER_WORKDIR: /tmp/runner/work
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/actions-runner:2.334.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
