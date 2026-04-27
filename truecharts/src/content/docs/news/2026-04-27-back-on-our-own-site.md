---
slug: "news/truecharts/back-on-our-own-site"
title: "TrueCharts Has Its Own Website Again"
authors: [crowcontrol, alfi0812]
date: 2026-04-27
tags:
  - "2026"
  - "announcement"
---

Today is a bit of a homecoming: **TrueCharts has its own dedicated website again**.

For the past while, our docs and news lived alongside other TrueForge projects on the main TrueForge site. That setup served us during a transitional period, but TrueCharts has always been big enough — and opinionated enough — to deserve its own space.

## What This Means

- All TrueCharts documentation, news, and chart-related guides live on the dedicated TrueCharts site again.
- The site is still maintained under the **TrueForge** umbrella, with TrueForge handling hosting, CI/CD, infrastructure, and community support.
- News and announcements specific to TrueCharts will be posted here from now on.

## ClusterTool Is Back — And It Is AGPL

The other big news for TrueCharts users: **ClusterTool is once again its own dedicated project**.

Cluster management used to live inside **ForgeTool**. With ForgeTool v4.0.0, that has been split out:

- **ClusterTool** — focused entirely on cluster management for TrueCharts and self-hosted Kubernetes (Talos, Helm, OCI workflows).
- **ForgeTool** — focused on internal TrueForge development and CI/CD tooling.

As part of this split, **ClusterTool is now licensed under AGPL** instead of BSL. This better matches what ClusterTool actually is: a tool meant to be used, modified, and improved by the community that runs on it.

If you were using ForgeTool to manage your TrueCharts cluster, **your path forward is ClusterTool**.

## Alfi Takes Over ClusterTool and TrueCharts Development

Alongside the split, **[Alfi](https://github.com/alfi0812) is taking over development of both ClusterTool and TrueCharts going forward**. Both projects stay under the TrueForge umbrella — with TrueForge handling shared infrastructure, release engineering, and documentation pipelines — but day-to-day development now has a clear, dedicated lead.

For TrueCharts users, that means:

- More predictable releases.
- Better-aligned tooling between charts and the cluster tool you use to deploy them.
- A more focused TrueCharts site, with TrueForge handling the heavy lifting underneath.

## What’s Next

- New chart updates and release notes will land here on the TrueCharts site.
- ClusterTool will get its own focused documentation, tightly integrated with TrueCharts workflows.
- TrueCharts and **ContainerForge** continue to evolve together, with ContainerForge providing a consistent, opinionated base for the images our charts depend on.

Welcome back to a TrueCharts site that is, once again, just about TrueCharts.

— The TrueCharts & TrueForge Teams
