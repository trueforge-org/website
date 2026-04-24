---
title: Docker Compose
---

Example `docker-compose.yaml` for **znc**:

```yaml
version: "3.9"

services:
  znc:
    image: ghcr.io/trueforge-org/znc:znc-1.10.1
    container_name: znc
    restart: unless-stopped

    ports:
      - "6501:6501"

    environment:
      MAKEFLAGS: "-j4"

    volumes:
      - ./config:/config
```
