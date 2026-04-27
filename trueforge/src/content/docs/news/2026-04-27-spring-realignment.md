---
slug: "news/trueforge/spring-2026-realignment"
title: "Spring 2026: A New Shape for TrueForge"
authors: [privatepuffin]
date: 2026-04-27
tags:
  - "2026"
  - "announcement"
---

The past few months have been some of the busiest in TrueForge’s history. We have been quietly reshaping how our projects are organised, how they are built, and how they are presented to the world.

Today we are pulling the curtain back on all of it at once.

## A Family of Independent Websites

For a long time, most of what we did lived under a single umbrella site. That made sense when we were small — but as the projects grew, it stopped doing any of them justice.

So we split things up:

- **[ContainerForge](https://containerforge.org)** has its own dedicated website, focused entirely on our opinionated container image library, deployment guides, and Docker Compose examples.
- **[GamingForge](https://gamingforge.org)** now has its own home as well, dedicated to our community game servers and the guides around them.
- **[ManicMeads](https://manicmeads.com)** has been moved out into its own site, where the mead-making content can grow without competing with our infrastructure work.
- **[TrueCharts](https://truecharts.org)** is, once again, an independent website — back to having a focused space of its own that fits its scope and its community.

The main **[trueforge.org](https://trueforge.org)** site now does what it was always meant to do: tell you what TrueForge *is*, and point you towards the projects we incubate.

## TrueForge: A Multi-Project Facilitator and Incubator

This split is more than a website reshuffle. It reflects what TrueForge has been turning into for a while now: a **multi-project facilitator and incubator**.

Concretely, that means TrueForge takes on the parts of running a project that are hard to do alone:

- Hosting and infrastructure
- CI/CD pipelines and shared tooling
- Documentation pipelines
- Community building and moderation
- Promotion and visibility
- User and contributor support
- Shared development effort across projects

Individual projects under our umbrella — TrueCharts, ContainerForge, ClusterTool, GamingForge, ManicMeads, and others to come — get to focus on what they actually do, while sharing the load underneath.

## Splitting ForgeTool: Meet ClusterTool (Again)

When we merged everything into **ForgeTool**, the goal was a single supertool. In practice, the two halves of that tool wanted very different things: one was about **cluster management**, the other was about **internal development and CI/CD**.

So we are splitting them again — and this time the split is intentional, not historical.

- **ClusterTool** returns as its own dedicated tool, focused entirely on cluster management for TrueCharts and self-hosted Kubernetes setups (Talos, Helm, OCI workflows, the works).
- **ForgeTool** continues, but with a much sharper scope: **internal development and CI/CD tooling** for TrueForge projects.

### ClusterTool Is Now AGPL

As part of bringing ClusterTool back to life as its own project, we are also **changing its license from BSL to AGPL**. ClusterTool is a tool that is meant to be used, modified, and shared by the community that depends on it, and AGPL fits that intent far better than BSL ever did.

### Alfi Takes Over ClusterTool and TrueCharts Development

Alongside the split, **[Alfi](https://github.com/alfi0812) is taking over development of both ClusterTool and TrueCharts going forward**. Under the TrueForge umbrella, that gives both projects a clear, dedicated lead — backed by TrueForge’s shared infrastructure, release engineering, and documentation pipelines, without forcing the projects themselves to merge.

## ForgeTool v4.0.0

Today we are also releasing **ForgeTool v4.0.0**.

The headline change is simple but important: **ForgeTool no longer contains cluster management**. Everything cluster-related has been moved to **ClusterTool**. ForgeTool v4 is now a focused tool for our internal development workflows and CI/CD pipelines.

If you were using ForgeTool to manage clusters, your migration path is **ClusterTool**.

## Less Bash, More ForgeTool

Behind the scenes, we have spent a lot of effort moving away from the large, sprawling shell scripts that used to glue our documentation pipeline together. Big chunks of that pipeline now live inside **ForgeTool itself** as proper, testable commands.

It is less exciting from the outside than a new chart or a new container — but it is the kind of work that makes everything else faster, more reliable, and easier for new contributors to pick up.

## ContainerForge Is Expanding

**[ContainerForge](https://containerforge.org)** is growing fast. The new site brings:

- More **guides**, covering deployment, fundamentals, and platform-specific tips.
- A dedicated section per container, including a **Docker Compose example** for that specific image — so you can go from “interesting image” to “running stack” in minutes.
- Tighter alignment with TrueCharts so charts and containers continue to evolve together.

If you have been hesitant to leave Helm-land, the new ContainerForge docs should make standalone Docker / Compose deployments feel a lot more first-class.

## What This Means for You

- **TrueCharts users** — head to [truecharts.org](https://truecharts.org) for everything chart-related.
- **Container users** — explore the new [containerforge.org](https://containerforge.org), including the per-container Compose examples.
- **Game server folks** — [gamingforge.org](https://gamingforge.org) is now your place, and yes, it has news of its own.
- **Mead enthusiasts** — meet you over at [manicmeads.com](https://manicmeads.com).
- **ClusterTool users** — ClusterTool is back as its own project, AGPL-licensed, and now led by [Alfi](https://github.com/alfi0812) under the TrueForge umbrella.
- **ForgeTool users** — upgrade to **v4.0.0** for the new development-and-CI-focused tool, and switch to **ClusterTool** for cluster management.

We are excited about what this realignment unlocks. TrueForge as a facilitator, projects as first-class citizens, and a much clearer story for everyone involved.

— The TrueForge Team
