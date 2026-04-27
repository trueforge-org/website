---
title: Portainer
sidebar:
  order: 7
---

[Portainer](https://www.portainer.io/) provides a web UI for managing Docker, Podman, and Kubernetes environments. Our images deploy through it without any special configuration.

## Deploying as a Stack

1. In Portainer, go to **Stacks** → **Add stack**.
2. Choose the **Web editor** and paste a Compose definition:

   ```yaml
   services:
     home-assistant:
       image: ghcr.io/trueforge-org/home-assistant:2025.5.1
       container_name: home-assistant
       user: 568:568
       ports:
         - 8123:8123
       volumes:
         - home-assistant-config:/config
       restart: unless-stopped

   volumes:
     home-assistant-config:
   ```

3. Click **Deploy the stack**.

## GitOps Stacks

For reproducible deployments, point Portainer at a Git repository containing your Compose files. Combine this with [Renovate](/guides/renovate/) to automate image updates via pull requests.

## Image Pinning

Portainer's "Pull image" toggle re-pulls by tag on redeploy. To guarantee immutability across redeploys, pin to a digest as described in [Tag Immutability](/guides/tag-immutability/).
