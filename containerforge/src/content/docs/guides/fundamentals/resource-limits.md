---
title: Resource Limits
sidebar:
  order: 5
---

Without limits, a misbehaving container can starve its host. Set sensible CPU and memory caps for every long-running service.

## Docker Compose

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: 512M
        reservations:
          cpus: "0.25"
          memory: 128M
```

For Compose v2 outside of Swarm, the equivalent shorthand is:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    cpus: 1.0
    mem_limit: 512m
    mem_reservation: 128m
```

## Kubernetes

```yaml
resources:
  requests:
    cpu: 250m
    memory: 128Mi
  limits:
    cpu: 1000m
    memory: 512Mi
```

## Choosing Values

- Start by observing the application under realistic load (`docker stats`, `kubectl top`).
- Set **requests** to the steady-state usage; this drives scheduling.
- Set **limits** to a comfortable ceiling — typically 1.5×–2× the steady state.
- Avoid setting CPU limits aggressively in Kubernetes: throttling hurts latency-sensitive workloads more than it helps.

## OOM Behavior

If a container exceeds its memory limit it is killed (`OOMKilled`). Combine limits with [healthchecks](/guides/fundamentals/healthchecks/) and a restart policy so the workload recovers automatically.
