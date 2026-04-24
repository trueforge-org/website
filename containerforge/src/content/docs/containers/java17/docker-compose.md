---
title: Docker Compose
---

Example `docker-compose.yaml` for **java17**:

```yaml
version: "3.9"

services:
  java17:
    image: ghcr.io/trueforge-org/java17:17.0.16+8
    container_name: java17
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
