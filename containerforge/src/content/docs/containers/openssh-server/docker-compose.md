---
title: Docker Compose
---

Example `docker-compose.yaml` for **openssh-server**:

```yaml
version: "3.9"

services:
  openssh-server:
    image: ghcr.io/trueforge-org/openssh-server:10.2_p1-r0-ls217
    container_name: openssh-server
    restart: unless-stopped

    ports:
      - "2222:2222"

    environment: {}

    volumes:
      - ./config:/config
```
