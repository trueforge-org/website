---
title: Docker Compose
---

Example `docker-compose.yaml` for **transmission**:

```yaml
version: "3.9"

services:
  transmission:
    image: ghcr.io/trueforge-org/transmission:4.0.5-1build5
    container_name: transmission
    restart: unless-stopped

    ports:
      - "9091:9091"

    environment:
      HOME: "/config"
      TRANSMISSION_WEB_HOME: "/usr/share/transmission/public_html"
      XDG_CONFIG_HOME: "/config"
      XDG_DATA_HOME: "/config"

    volumes:
      - ./config:/config
```
