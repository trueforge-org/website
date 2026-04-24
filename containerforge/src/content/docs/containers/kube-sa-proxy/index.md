---
title: kube-sa-proxy
---

![Version: v1.30.2](https://img.shields.io/badge/Version-v1.30.2-informational?style=flat-square) ![License: AGPL--3.0--or--later](https://img.shields.io/badge/License-AGPL--3.0--or--later-informational?style=flat-square)

## Overview

This page contains the container reference for **kube-sa-proxy**, including upstream source links, available documentation, and app-specific notes.

## Metadata

| Field | Value |
| --- | --- |
| App | kube-sa-proxy |
| Version | v1.30.2 |
| License | AGPL--3.0--or--later |

## Source

- https://github.com/Jackett/Jackett

## Available Documentation

- [**Docker-Compose**](./docker-compose)

---

## App Notes

## Readme


### Features

- Proxy server for HTTP requests
- Authentication with API key stored in a file
- Dynamic monitoring of the API key file for updates
- Lightweight and easy to deploy

### Getting Started

To get started with File Auth Proxy Service, follow these steps:

1. Clone this repository.
2. Build the project using `go build`.
3. Run the executable, specifying the desired port, API file path, proxy target URL, and authentication token header.

```bash
./my-proxy-service -port <port> -api-file <api-file-path> -proxy-target <proxy-target-url> -auth-token-header <auth-token-header-name>
```

### Docker Usage and Environment Variables

To run the File Auth Proxy Service using Docker, use the provided Docker image:

#### docker run

The volume can be _ANY_ path like the port can be set to whatever you want; if you change the PORT env, you need to change the internal port too...

```bash
docker run -d -p 3000:3000 \
  -v /path/to/local/config:/config \
  -e PORT=3000 \
  -e API_FILE=/config/api-key \
  -e PROXY_TARGET=http://example.com \
  -e AUTH_TOKEN_HEADER=authorization \
  ghcr.io/xstar97/my-proxy-service:latest
```

#### docker-compose

The volume can be _ANY_ path like the port can be set to whatever you want; if you change the PORT env, you need to change the internal port too...

```yaml
version: '3.8'

services:
  my-proxy-service:
    image: ghcr.io/xstar97/my-proxy-service:latest
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - API_FILE=/config/api-key
      - PROXY_TARGET=http://example.com
      - AUTH_TOKEN_HEADER=authorization
    volumes:
      - /path/to/local/config:/config
```

