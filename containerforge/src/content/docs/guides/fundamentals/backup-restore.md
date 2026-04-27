---
title: Backup & Restore
sidebar:
  order: 14
---

Container images are reproducible — your data is not. This guide covers the basics of backing up and restoring the volumes that hold your application state.

## What to Back Up

- **Configuration volumes** (e.g. `/config`)
- **Database volumes** for any sidecar databases (Postgres, MariaDB, …)
- **Compose / Helm files** themselves — store them in Git

The container image and ephemeral runtime state do not need backing up.

## Stop-Backup-Start

The safest pattern for SQLite and on-disk state:

```sh
docker compose stop my-app
tar -C /var/lib/docker/volumes -czf my-app-$(date +%F).tgz my-app-config/
docker compose start my-app
```

## Live Snapshots

For ZFS or btrfs hosts, take a filesystem snapshot of the bind-mount path. This avoids downtime but requires the application to tolerate consistent-but-frozen state.

## Database Dumps

Sidecar databases should be dumped with their native tooling rather than copying raw data files:

```sh
docker compose exec db pg_dump -U postgres my-app > my-app-$(date +%F).sql
```

## Restic / Kopia

For off-host backups, point [Restic](https://restic.net/) or [Kopia](https://kopia.io/) at the volume directory. Encrypted, deduplicated, incremental — and trivially restorable.

## Restore Drill

A backup you have not restored is a hope, not a backup. Periodically:

1. Spin up a fresh container with an empty volume.
2. Restore the archive into it.
3. Start the container and verify.
