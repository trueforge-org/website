---
title: Kubernetes
sidebar:
  order: 2
---

For using our containers on Kubernetes, we recommend our sister project [TrueCharts](https://truecharts.org). That way you get the full benefit of much additional testing prior to deployment.

## Passing Arguments

Some applications only allow certain configurations via command-line arguments rather than environment variables. For such cases, refer to the Kubernetes documentation on [defining commands and arguments for a container](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/).

Specify the desired arguments as shown below:

```yaml
args:
  - --port
  - "8080"
```

## Security Context

Our containers are designed to run rootless. Set your pod security context accordingly:

```yaml
securityContext:
  runAsUser: 568
  runAsGroup: 568
  fsGroup: 568
```
