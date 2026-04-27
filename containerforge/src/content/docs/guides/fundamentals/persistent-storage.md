---
title: Persistent Storage
sidebar:
  order: 2
---

Containers are ephemeral — anything not written to a mounted volume is lost on recreation. This guide covers how to persist application data correctly.

## Configuration Directory

Where reasonable, our images expose a single configuration directory at `/config`. Mount a named volume or bind mount there:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    volumes:
      - my-app-config:/config

volumes:
  my-app-config:
```

## Named Volumes vs Bind Mounts

| Type | When to Use |
|---|---|
| **Named volume** | Default choice. Portable, managed by the runtime, easy to back up. |
| **Bind mount** | When you need direct host access — e.g. a media library or NFS share. |

Bind mount example:

```yaml
volumes:
  - /mnt/tank/configs/my-app:/config
  - /mnt/tank/media:/media:ro
```

## Permissions

The mounted directory must be readable and writable by the container user. Our images default to `568:568`:

```sh
sudo chown -R 568:568 /mnt/tank/configs/my-app
```

If you change the user via `user:` or `securityContext`, update ownership accordingly. See [Rootless Containers](/guides/containerforge/rootless/).

## Read-Only Root Filesystem

Many of our images support a read-only root filesystem with a writable `/tmp`:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    read_only: true
    tmpfs:
      - /tmp:rw
    volumes:
      - my-app-config:/config
```
