---
title: Docker Compose
---

Example `docker-compose.yaml` for **diskover**:

```yaml
version: "3.9"

services:
  diskover:
    image: ghcr.io/trueforge-org/diskover:2.3.5
    container_name: diskover
    restart: unless-stopped

    ports:
      - "80:80"
      - "443:443"

    environment:
      DATABASE: "/config/diskoverdb.sqlite3"
      DISKOVERDIR: "/config/diskover.conf.d/diskover/"
      ES_HOST: "elasticsearch"

    volumes:
      - ./config:/config
```
