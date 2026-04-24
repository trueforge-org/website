---
title: Docker-Compose
---


```yaml
name: java8
services:
  java8:
    container_name: java8
    environment:
      JAVA_HOME: /opt/java/openjdk
      JRE_CACERTS_PATH: $JAVA_HOME/lib/security/cacerts
      LANG: en_US.UTF-8
      LANGUAGE: en_US:en
      LC_ALL: en_US.UTF-8
      PATH: $JAVA_HOME/bin:$PATH
    image: ghcr.io/trueforge-org/java8:8u472-b08
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
