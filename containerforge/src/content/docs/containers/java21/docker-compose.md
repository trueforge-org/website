---
title: Docker-Compose
---


```yaml
name: java21
services:
  java21:
    container_name: java21
    environment:
      JAVA_HOME: /opt/java/openjdk
      JRE_CACERTS_PATH: $JAVA_HOME/lib/security/cacerts
      LANG: en_US.UTF-8
      LANGUAGE: en_US:en
      LC_ALL: en_US.UTF-8
      PATH: $JAVA_HOME/bin:$PATH
    image: ghcr.io/trueforge-org/java21:21.0.8+9
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
