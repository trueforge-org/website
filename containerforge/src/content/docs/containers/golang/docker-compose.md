---
title: Docker Compose
---

Example `docker-compose.yaml` for **golang**:

```yaml
version: "3.9"

services:
  golang:
    image: ghcr.io/trueforge-org/golang:1.26.2
    container_name: golang
    restart: unless-stopped

    ports: []

    environment:
      GOCACHE: "/tmp/go-build"
      GOPATH: "/config/go"
      GOTOOLCHAIN: "local"
      HOME: "/config"
      PATH: "/usr/local/go/bin:$PATH"

    volumes:
      - ./config:/config
```
