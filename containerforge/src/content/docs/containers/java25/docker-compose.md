---
title: Docker-Compose
---


```yaml
name: java25
services:
  java25:
    container_name: java25
    environment:
      JAVA_HOME: /opt/java/openjdk
      JRE_CACERTS_PATH: $JAVA_HOME/lib/security/cacerts
      LANG: en_US.UTF-8
      LANGUAGE: en_US:en
      LC_ALL: en_US.UTF-8
      PATH: $JAVA_HOME/bin:$PATH
    image: ghcr.io/trueforge-org/java25:25.0.1+8
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
