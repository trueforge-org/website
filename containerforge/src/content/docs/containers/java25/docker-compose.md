---
title: Docker Compose
---

Example `docker-compose.yaml` for **java25**:

```yaml
version: "3.9"

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
