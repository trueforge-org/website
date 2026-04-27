---
title: Healthchecks
sidebar:
  order: 4
---

A healthcheck lets your runtime know whether the application inside the container is actually working — not just whether the process is alive.

## Defining a Healthcheck

If an image does not ship a built-in healthcheck, add one in Compose:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:8080/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 30s
```

## Reacting to Failures

Combine healthchecks with `restart: unless-stopped` to recover from transient failures, and use a dependency condition to start a service only once a sidecar is healthy:

```yaml
services:
  app:
    image: ghcr.io/trueforge-org/my-app:latest
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      retries: 5
```

## Kubernetes

In Kubernetes, use `livenessProbe`, `readinessProbe`, and `startupProbe` instead of Docker's healthcheck:

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 30
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  periodSeconds: 10
```

:::tip
A failing liveness probe causes Kubernetes to restart the pod. A failing readiness probe only removes it from the Service — pick the right one for the failure you want to express.
:::
