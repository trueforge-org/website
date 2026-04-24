---
title: Docker Compose
---

Example `docker-compose.yaml` for **ngircd**:

```yaml
version: "3.9"

services:
  ngircd:
    image: ghcr.io/trueforge-org/ngircd:27-r1-ls163
    container_name: ngircd
    restart: unless-stopped

    ports:
      - "6667:6667"

    environment: {}

    volumes:
      - ./config:/config
```
