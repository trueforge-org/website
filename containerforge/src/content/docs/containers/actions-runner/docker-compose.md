---
title: Docker Compose
---

Example `docker-compose.yaml` for **actions-runner**:

```yaml
version: "3.9"

services:
  actions-runner:
    image: ghcr.io/trueforge-org/actions-runner:2.334.0
    container_name: actions-runner
    restart: unless-stopped

    ports: []

    environment:
      ACTIONS_RUNNER_CONTAINER_HOOKS: "/home/runner/k8s/index.js"
      ACTIONS_RUNNER_PRINT_LOG_TO_STDOUT: "1"
      GOPATH: "/tmp/go"
      HOMEBREW_NO_ANALYTICS: "1"
      HOMEBREW_NO_ENV_HINTS: "1"
      HOMEBREW_NO_INSTALL_CLEANUP: "1"
      ImageOS: "ubuntu22"
      RUNNER_ALLOW_RUNASROOT: "1"
      RUNNER_MANUALLY_TRAP_SIG: "1"

    volumes:
      - ./config:/config
```
