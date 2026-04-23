---
title: Docker Compose
---

Example `docker-compose.yaml` for **java25**:

```yaml
version: "3.9"

# Template variables expected from future renderer:
# - SERVICE_NAME: string
# - IMAGE: string
# - CONTAINER_NAME: string (optional)
# - RESTART_POLICY: string (optional, default: unless-stopped)
# - PORTS: list of { host_port, container_port, protocol }
# - ENV: list of { name, value }
# - VOLUMES: list of { host_path, container_path, mode }
#
# This template is intentionally renderer-agnostic and uses simple token markers.

services:
  java25:
    image: ghcr.io/trueforge-org/java25:25.0.1+8
    container_name: java25
    restart: unless-stopped

    ports: []

    environment:
      JAVA_HOME: "/opt/java/openjdk"
      JRE_CACERTS_PATH: "$JAVA_HOME/lib/security/cacerts"
      LANG: "en_US.UTF-8"
      LANGUAGE: "en_US:en"
      LC_ALL: "en_US.UTF-8"
      PATH: "$JAVA_HOME/bin:$PATH"

    volumes:
      - ./config:/config
```
