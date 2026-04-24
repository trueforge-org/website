---
title: Docker Compose
---

Example `docker-compose.yaml` for **minisatip**:

```yaml
version: "3.9"

services:
  minisatip:
    image: ghcr.io/trueforge-org/minisatip:2.0.79
    container_name: minisatip
    restart: unless-stopped

    ports:
      - "554:554"
      - "1900:1900/udp"
      - "8875:8875"

    environment:
      -type: "c"
      ATTACHED_DEVICES_PERMS: "/dev/dvb"
      MAKEFLAGS: "-j4"

    volumes:
      - ./config:/config
```
