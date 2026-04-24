---
title: Docker Compose
---

Example `docker-compose.yaml` for **nzbhydra2**:

```yaml
version: "3.9"

services:
  nzbhydra2:
    image: ghcr.io/trueforge-org/nzbhydra2:v8.7.1
    container_name: nzbhydra2
    restart: unless-stopped

    ports:
      - "5076:5076"

    environment:
      JAVA_TOOL_OPTIONS: "-Xmx256M"

    volumes:
      - ./config:/config
```
