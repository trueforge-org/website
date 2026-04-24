---
title: Docker-Compose
---


```yaml
name: kube-sa-proxy
services:
  kube-sa-proxy:
    container_name: kube-sa-proxy
    environment:
      PORT: "3000"
    image: ghcr.io/trueforge-org/kube-sa-proxy:v1.30.2
    ports:
      - mode: ingress
        target: 3000
        published: "3000"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
