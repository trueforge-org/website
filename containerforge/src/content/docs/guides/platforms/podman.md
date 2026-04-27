---
title: Podman
sidebar:
  order: 4
---

[Podman](https://podman.io/) is a daemonless, drop-in alternative to Docker that runs containers rootless by default — a great match for our images.

## Pulling an Image

```sh
podman pull ghcr.io/trueforge-org/home-assistant:2025.5.1
```

## Running a Container

```sh
podman run -d \
  --name home-assistant \
  --user 568:568 \
  -p 8123:8123 \
  -v home-assistant-config:/config \
  ghcr.io/trueforge-org/home-assistant:2025.5.1
```

## Using Compose

Podman supports Compose files via [`podman compose`](https://docs.podman.io/en/latest/markdown/podman-compose.1.html) or the standalone [`podman-compose`](https://github.com/containers/podman-compose) tool. Compose snippets from our [Docker Compose](/guides/docker-compose/) guide work unchanged.

## Quadlets (systemd)

For long-running services, generate a [Quadlet](https://docs.podman.io/en/latest/markdown/podman-systemd.unit.5.html) so systemd manages the container:

```ini
# /etc/containers/systemd/home-assistant.container
[Container]
Image=ghcr.io/trueforge-org/home-assistant:2025.5.1
ContainerName=home-assistant
PublishPort=8123:8123
Volume=home-assistant-config:/config
User=568:568

[Service]
Restart=always

[Install]
WantedBy=multi-user.target
```

Reload and start:

```sh
systemctl daemon-reload
systemctl start home-assistant
```

:::tip
Because our containers already run as `568:568`, no `--privileged` or `--userns=keep-id` flag is required for normal use.
:::
