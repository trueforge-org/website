---
title: Docker-Compose
---


```yaml
name: devcontainer
services:
  devcontainer:
    container_name: devcontainer
    environment:
      GOPATH: /config/go
      GOTOOLCHAIN: local
      PATH: /usr/local/go/bin:${PATH}
      SOPS_VERSION: 3.12.2
      chartReleaserVersion: 1.8.1
      chartTestingVersion: 3.14.0
      conftestVersion: 0.68.2
      goyqVersion: 4.53.2
      helmVersion: 4.1.4
      k9sVersion: 0.50.18
      kubeScoreVersion: 1.20.0
      kubeconformVersion: 0.7.0
      kubectlVersion: 1.36.0
      kubevalVersion: 0.16.1
      kustomizeVersion: 5.8.0
      oldhelmVersion: 3.12.1
      rancherVersion: 2.14.0
      skaffoldVersion: 2.18.3
      starshipVersion: 1.25.0
      tiltVersion: 0.37.1
    image: ghcr.io/trueforge-org/devcontainer:3.0.2
    restart: unless-stopped
    volumes:
      - type: bind
        source: config
        target: /config
```
