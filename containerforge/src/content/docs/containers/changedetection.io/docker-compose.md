---
title: Docker Compose
---

Example `docker-compose.yaml` for **changedetection.io**:

```yaml
version: "3.9"

services:
  changedetection.io:
    image: ghcr.io/trueforge-org/changedetection.io:0.54.10
    container_name: changedetection.io
    restart: unless-stopped

    ports:
      - "5000:5000"

    environment:
      PYTHONUNBUFFERED: "1"

    volumes:
      - ./config:/config
```
