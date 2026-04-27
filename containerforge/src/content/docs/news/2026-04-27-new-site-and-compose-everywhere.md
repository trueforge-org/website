---
slug: "news/containerforge/new-site-and-compose-everywhere"
title: "ContainerForge Has Its Own Home — and Compose Examples Everywhere"
authors: [privatepuffin, alfi0812]
date: 2026-04-27
tags:
  - "2026"
  - "announcement"
---

**ContainerForge now has its own dedicated website** at [containerforge.org](https://containerforge.org). And it is not just a cosmetic move — it comes with a real expansion of what ContainerForge offers.

## A Site Just for Containers

ContainerForge used to live as a section of the broader TrueForge site. It has grown enough — in scope, in image count, and in users — that it deserves its own space.

The new site is focused entirely on:

- The **ContainerForge image library**
- **Deployment guides** for different platforms (TrueNAS, Docker, Kubernetes, etc.)
- **Container fundamentals** — how the underlying tech actually works
- **Tools** that complement the containers
- A growing per-container reference

## More Guides

We have significantly expanded the **guides** section. Expect more:

- Platform-specific deployment guides
- Best-practice walkthroughs
- Fundamentals content for users who want to understand what is actually happening behind the scenes
- Tool documentation around the ecosystem we use and recommend

These guides are aimed at meeting users where they are — whether you run TrueNAS Custom Apps, Docker on a single VPS, or full Kubernetes clusters.

## A Docker Compose Example for Every Container

This is the change we are most excited about: **every container now gets its own dedicated section on the new website**, including a **Docker Compose example** for that specific image.

That means going from “this image looks useful” to “running stack on my server” is just a copy/paste away — no need to translate Helm values into Compose by hand.

Each container’s page will cover:

- What the image is and what it is for
- The opinionated defaults we ship
- A working **`docker-compose.yml`** example you can adapt
- Notes on running it on TrueNAS, plain Docker, or Kubernetes

## Still Aligned with TrueCharts

ContainerForge remains the foundation for **TrueCharts** images. The new site does not change that — if anything, it strengthens it.

Charts and containers continue to evolve together, with shared tooling and shared standards. But ContainerForge is also a first-class option on its own, especially for users who prefer Docker Compose over Helm.

## What’s Next

- Expanding container coverage across more common self-hosted apps
- More example Compose stacks for popular combinations
- Continued alignment with TrueCharts and the rest of the TrueForge ecosystem

Have a container you would love to see — or a Compose example to contribute? Open an issue or PR on [GitHub](https://github.com/trueforge-org/containerforge), or come chat with us on [Discord](https://discord.gg/tVsPTHWTtr).

— The ContainerForge Team
