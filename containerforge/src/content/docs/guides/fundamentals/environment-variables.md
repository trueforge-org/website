---
title: Environment Variables
sidebar:
  order: 8
---

Most of our containers are configured primarily via environment variables. They follow upstream conventions — refer to each application's per-container page for the supported keys.

## Setting Variables

### Docker Compose

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    environment:
      TZ: Europe/Amsterdam
      LOG_LEVEL: info
```

### Podman / Docker CLI

```sh
docker run -e TZ=Europe/Amsterdam -e LOG_LEVEL=info ghcr.io/trueforge-org/my-app:latest
```

### Kubernetes

```yaml
env:
  - name: TZ
    value: Europe/Amsterdam
  - name: LOG_LEVEL
    value: info
```

## Loading From a File

For long lists of variables, use an env file:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    env_file:
      - ./my-app.env
```

## Time Zone

All our images respect the standard `TZ` variable, e.g. `TZ=Europe/Amsterdam`. If unset, the container defaults to UTC.

:::tip
Avoid placing secrets directly in `environment:` blocks committed to Git. See [Secrets Management](/guides/secrets-management/) for safer patterns.
:::
