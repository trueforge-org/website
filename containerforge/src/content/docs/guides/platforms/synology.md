---
title: Synology DSM
sidebar:
  order: 6
---

Synology DSM 7.2+ ships with [Container Manager](https://www.synology.com/en-global/dsm/feature/container-manager), which is fully compatible with our images.

## Deploying via Project (Compose)

1. Open **Container Manager** → **Project** → **Create**.
2. Choose a path on a shared folder (e.g. `/volume1/docker/home-assistant`).
3. Paste a Compose file:

   ```yaml
   services:
     home-assistant:
       image: ghcr.io/trueforge-org/home-assistant:2025.5.1
       container_name: home-assistant
       user: 568:568
       ports:
         - 8123:8123
       volumes:
         - ./config:/config
       restart: unless-stopped
   ```

4. Build and start the project.

## Volume Permissions

Before first start, ensure the bind-mounted directory is owned by UID/GID `568`:

```sh
sudo chown -R 568:568 /volume1/docker/home-assistant/config
```

If you cannot create that user/group on the NAS, override the container user instead — see [Rootless Containers](/guides/rootless/).

## Networking

By default Container Manager uses the bridge network. To expose a service on a specific NIC, create a **macvlan** network in **Container Manager** → **Network**.
