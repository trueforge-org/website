---
title: Docker Compose
---

Example `docker-compose.yaml` for **java8**:

```yaml
version: "3.9"

services:
  java8:
    image: ghcr.io/trueforge-org/java8:8u472-b08
    container_name: java8
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
