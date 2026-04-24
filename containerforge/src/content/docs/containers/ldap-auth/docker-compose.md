---
title: Docker Compose
---

Example `docker-compose.yaml` for **ldap-auth**:

```yaml
version: "3.9"

services:
  ldap-auth:
    image: ghcr.io/trueforge-org/ldap-auth:3.4.5
    container_name: ldap-auth
    restart: unless-stopped

    ports:
      - "8888:8888"
      - "9000:9000"

    environment: {}

    volumes:
      - ./config:/config
```
