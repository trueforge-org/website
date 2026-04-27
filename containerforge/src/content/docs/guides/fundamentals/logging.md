---
title: Logging
sidebar:
  order: 18
---

Our containers follow the [12-factor](https://12factor.net/logs) convention: every process logs to `stdout` and `stderr`, and the runtime decides what to do with those streams.

## Reading Logs

```sh
docker logs -f --tail=100 my-app
```

For Compose:

```sh
docker compose logs -f my-app
```

For Kubernetes:

```sh
kubectl logs -f deploy/my-app
```

## Rotation

By default Docker uses the `json-file` driver with no rotation — logs grow forever. Configure rotation in `/etc/docker/daemon.json`:

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```

Restart the Docker daemon for changes to take effect.

## Shipping Logs Centrally

Set a different log driver per service to ship logs to Loki, Splunk, or syslog:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    logging:
      driver: loki
      options:
        loki-url: http://loki:3100/loki/api/v1/push
```

For Kubernetes, use a node-level collector such as [Promtail](https://grafana.com/docs/loki/latest/clients/promtail/), [Fluent Bit](https://fluentbit.io/), or [Vector](https://vector.dev/) — no per-pod configuration required.

## Log Levels

Most applications expose a `LOG_LEVEL` (or similar) variable. See [Environment Variables](/guides/environment-variables/).
