---
title: Docker Compose
---

Example `docker-compose.yaml` for **syslog-ng**:

```yaml
version: "3.9"

services:
  syslog-ng:
    image: ghcr.io/trueforge-org/syslog-ng:4.10.2-r1-ls184
    container_name: syslog-ng
    restart: unless-stopped

    ports:
      - "5514:5514/udp"
      - "6514:6514"
      - "6601:6601"

    environment: {}

    volumes:
      - ./config:/config
```
