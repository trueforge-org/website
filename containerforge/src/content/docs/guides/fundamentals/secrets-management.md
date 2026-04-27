---
title: Secrets Management
sidebar:
  order: 6
---

Secrets — API tokens, database passwords, TLS keys — should never be committed to Git in plaintext or baked into images. This guide covers the safest options for each runtime.

## Docker Compose Secrets

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    environment:
      DB_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

The file is mounted at `/run/secrets/db_password` and is readable only by the container. Many applications accept either `FOO` or `FOO_FILE` — prefer the file form so the secret never appears in `docker inspect` or `ps`.

## Env Files Outside Git

For simpler setups, keep an `.env` file alongside your Compose file and add it to `.gitignore`:

```yaml
services:
  my-app:
    image: ghcr.io/trueforge-org/my-app:latest
    env_file:
      - ./my-app.secrets.env
```

## Kubernetes

```yaml
env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: my-app
        key: db-password
```

For GitOps workflows use [SOPS](https://github.com/getsops/sops), [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets), or [External Secrets Operator](https://external-secrets.io/) so encrypted material can live in Git safely.

## What Not to Do

- Do not set secrets via `--build-arg` — they end up in image history.
- Do not hardcode secrets in Compose `environment:` lists committed to Git.
- Do not log secrets. If your app does, redact them before shipping logs.

:::caution
Rotate any credential that has ever been committed in plaintext, even briefly. Git history is forever.
:::
