---
title: Docker Compose
---

Example `docker-compose.yaml` for **librespeed**:

```yaml
version: "3.9"

services:
  librespeed:
    image: ghcr.io/trueforge-org/librespeed:v6.1.0
    container_name: librespeed
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
