---
title: Reverse Proxy
sidebar:
  order: 11
---

Putting a reverse proxy in front of our containers gives you TLS termination, a single ingress point, and clean DNS names. This guide shows minimal configurations for the most common proxies.

## Traefik

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    labels:
      - traefik.enable=true
      - traefik.http.routers.my-app.rule=Host(`my-app.example.com`)
      - traefik.http.routers.my-app.entrypoints=websecure
      - traefik.http.routers.my-app.tls.certresolver=letsencrypt
      - traefik.http.services.my-app.loadbalancer.server.port=8080
    networks:
      - traefik

networks:
  traefik:
    external: true
```

## Caddy

```text
my-app.example.com {
  reverse_proxy my-app:8080
}
```

## Nginx

```nginx
server {
  listen 443 ssl http2;
  server_name my-app.example.com;

  ssl_certificate     /etc/letsencrypt/live/my-app.example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/my-app.example.com/privkey.pem;

  location / {
    proxy_pass         http://my-app:8080;
    proxy_set_header   Host              $host;
    proxy_set_header   X-Real-IP         $remote_addr;
    proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Proto $scheme;
  }
}
```

## WebSocket Support

Some applications (e.g. Home Assistant) require WebSocket upgrades. Most modern proxies handle this automatically; for Nginx add:

```nginx
proxy_http_version 1.1;
proxy_set_header   Upgrade    $http_upgrade;
proxy_set_header   Connection "upgrade";
```

## Trusted Proxies

If the application logs the proxy's IP instead of the real client, configure its `trusted_proxies` setting (varies per app) to include the proxy's container or subnet.
