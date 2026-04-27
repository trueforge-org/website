---
title: Networking & Ports
sidebar:
  order: 10
---

This guide covers exposing container services to the host and to other containers.

## Publishing Ports

The `ports:` directive maps a host port to a container port:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    ports:
      - 8080:8080         # all interfaces
      - 127.0.0.1:9090:9090  # loopback only
```

Use a loopback bind whenever a service is reached only via a [reverse proxy](/guides/reverse-proxy/) on the same host — it removes the port from your LAN.

## Container-to-Container Networking

Containers on the same user-defined Docker network can reach each other by service name:

```yaml
services:
  app:
    image: ghcr.io/trueforge-org/my-app:latest
    networks:
      - backend
  db:
    image: postgres:16
    networks:
      - backend

networks:
  backend:
```

`app` reaches Postgres at `db:5432` — no published port required.

## Host Networking

For services that need access to host interfaces (mDNS, broadcast, etc.):

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    network_mode: host
```

:::caution
Host networking bypasses Docker's isolation and port mapping. Prefer bridge networking with explicit port publishes whenever possible.
:::

## IPv6

If you require IPv6, enable it on the Docker daemon and define an IPv6-enabled network. Our images do not require any special configuration to bind on IPv6.
