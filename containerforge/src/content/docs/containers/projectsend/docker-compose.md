---
title: Docker Compose
---

Example `docker-compose.yaml` for **projectsend**:

```yaml
version: "3.9"

services:
  projectsend:
    image: ghcr.io/trueforge-org/projectsend:r1945
    container_name: projectsend
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment: {}

    volumes:
      - ./config:/config
```
