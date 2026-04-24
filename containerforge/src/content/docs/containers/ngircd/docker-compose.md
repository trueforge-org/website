---
title: Docker-Compose
---

Every docker-container we build, can be easily loaded using a docker-compose file.

Please note that any dependencies need to be manually connected (primarily their database names, usernames and passwords.
Any optional dependancies or env-vars are commented out.

Please do check the application source for installation instructions and any env-vars and ports that are not managed/created by us.

## docker-compose.yaml

```yaml
name: ngircd
services:
  ngircd:
    container_name: ngircd
    environment:
      IRC_NETWORK_NAME: ExampleNet
      IRC_SERVER_NAME: irc.example.net
      TZ: Etc/UTC
    image: ghcr.io/trueforge-org/ngircd:27-r1-ls163
    ports:
      - mode: ingress
        target: 6667
        published: "6667"
        protocol: tcp
      - mode: ingress
        target: 6697
        published: "6697"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
