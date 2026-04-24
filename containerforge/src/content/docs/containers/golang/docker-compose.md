---
title: Docker-Compose
---


```yaml
name: golang
services:
  golang:
    container_name: golang
    environment:
      GOCACHE: /tmp/go-build
      GOPATH: /config/go
      GOTOOLCHAIN: local
      HOME: /config
      PATH: /usr/local/go/bin:$PATH
    image: ghcr.io/trueforge-org/golang:1.26.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
