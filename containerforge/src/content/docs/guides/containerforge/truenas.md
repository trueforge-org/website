---
title: TrueNAS Compatibility
sidebar:
  order: 3
---

We have ensured that, by default, all our containers use the TrueNAS Apps user when run — even when this is not specifically set.

TrueNAS can automatically update your container digests. By picking one of the specific tags you can limit updates to:

| Tag Format | Updates Included |
|---|---|
| `Major.Minor.Patch` | Digest updates only |
| `Major.Minor` | Patch and digest updates |
| `Major` | Patch, minor, and digest updates |
| `Rolling` | Every update |

This gives you full control of which updates TrueNAS will offer.
