---
title: Docker Compose
---

Example `docker-compose.yaml` for **gluetun**:

```yaml
version: "3.9"

services:
  gluetun:
    image: ghcr.io/trueforge-org/gluetun:v3.41.1
    container_name: gluetun
    restart: unless-stopped

    ports:
      - "8000:8000"
      - "8388:8388"
      - "8388:8388/udp"
      - "8888:8888"

    environment:
      VPN_INTERFACE: "tun0"
      VPN_SERVICE_PROVIDER: "pia"
      VPN_TYPE: "openvpn"

    volumes:
      - ./config:/config
```
