---
title: Docker Compose
---

Example `docker-compose.yaml` for **thelounge**:

```yaml
version: "3.9"

services:
  thelounge:
    image: ghcr.io/trueforge-org/thelounge:4.4.3
    container_name: thelounge
    restart: unless-stopped

    ports:
      - "9000:9000"

    environment:
      THELOUNGE_HOME: "/config"

    volumes:
      - ./config:/config
```
