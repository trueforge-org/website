---
title: Docker Compose
---

Example `docker-compose.yaml` for **kube-sa-proxy**:

```yaml
version: "3.9"

services:
  kube-sa-proxy:
    image: ghcr.io/trueforge-org/kube-sa-proxy:v1.30.2
    container_name: kube-sa-proxy
    restart: unless-stopped

    ports:
      - "3000:3000"

    environment:
      PORT: "3000"

    volumes:
      - ./config:/config
```
