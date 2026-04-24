---
title: Docker-Compose
---


```yaml
name: ngircd
services:
  ngircd:
    container_name: ngircd
    image: ghcr.io/trueforge-org/ngircd:27-r1-ls163
    ports:
      - mode: ingress
        target: 6667
        published: "6667"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
