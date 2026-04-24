---
title: Docker-Compose
---


```yaml
name: actions-runner
services:
  actions-runner:
    container_name: actions-runner
    environment:
      ACTIONS_RUNNER_CONTAINER_HOOKS: /home/runner/k8s/index.js
      ACTIONS_RUNNER_PRINT_LOG_TO_STDOUT: "1"
      GOPATH: /tmp/go
      HOMEBREW_NO_ANALYTICS: "1"
      HOMEBREW_NO_ENV_HINTS: "1"
      HOMEBREW_NO_INSTALL_CLEANUP: "1"
      ImageOS: ubuntu22
      RUNNER_ALLOW_RUNASROOT: "1"
      RUNNER_MANUALLY_TRAP_SIG: "1"
    image: ghcr.io/trueforge-org/actions-runner:2.334.0
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
