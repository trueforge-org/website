---
title: Docker-Compose
---


```yaml
name: java11
services:
  java11:
    container_name: java11
    environment:
      JAVA_HOME: /opt/java/openjdk
      JRE_CACERTS_PATH: $JAVA_HOME/lib/security/cacerts
      LANG: en_US.UTF-8
      LANGUAGE: en_US:en
      LC_ALL: en_US.UTF-8
      PATH: $JAVA_HOME/bin:$PATH
    image: ghcr.io/trueforge-org/java11:11.0.29+7
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
