---
title: Docker Compose
---

Example `docker-compose.yaml` for **unifi-network-application**:

```yaml
version: "3.9"

services:
  unifi-network-application:
    image: ghcr.io/trueforge-org/unifi-network-application:10.3.55
    container_name: unifi-network-application
    restart: unless-stopped

    ports:
      - "8080:8080"
      - "8443:8443"
      - "8843:8843"
      - "8880:8880"

    environment:
      DEBIAN_FRONTEND: "noninteractive"

    volumes:
      - ./config:/config
```
