---
title: Rootless Containers
sidebar:
  order: 1
---

By default the majority of our containers run as a non-root user (`568:568`). You are able to change the user/group by updating your configuration files.

However, for simplicity reasons we cannot give guarantees that changes to the user or group would be bug free.

## Why Rootless?

Running containers as a non-root user is a security best practice. It limits the blast radius of a container escape and follows the principle of least privilege.

## Changing the User

If your application requires a different UID/GID, you can override it in your container runtime configuration:

### Docker Compose

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    user: 1000:1000
```

### Kubernetes

```yaml
securityContext:
  runAsUser: 1000
  runAsGroup: 1000
```
