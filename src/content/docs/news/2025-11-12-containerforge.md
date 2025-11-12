---
slug: "news/announcing-containerForge"
title: "Announcing: ContainerForge"
authors: [privatepuffin]
date: 2025-11-12
tags:
  - "2025"
---

We’re excited to finally introduce **ContainerForge**, a new project under the **TrueForge–TrueTech** umbrella — and the foundation for all future **TrueCharts containers**!

🔗 **Learn more:** [trueforge.org/truetech/containerforge](https://trueforge.org/truetech/containerforge/)  
💬 **Join the discussion:** on our [Discord](https://discord.gg/tVsPTHWTtr)  
💻 **Explore the code:** [github.com/trueforge-org/containerforge](https://github.com/trueforge-org/containerforge)
💖 **Support our work:**  Sponsor us on [GitHub](https://github.com/sponsors/trueforge-org) or [OpenCollective](https://opencollective.com/trueforge)
---

## 🧩 What Is ContainerForge?

**ContainerForge** is an **opinionated collection of container images** — focused on being efficient, consistent, and easy to maintain.

Our containers follow modern standards and proven best practices:

- ✅ **Rootless** by default (`568:568`) for security and compatibility  
- ✅ **Multi-architecture** builds (x86 and ARM)  
- ✅ **Semantically versioned** and **digest-pinnable** for predictable updates  
- ✅ **Single-process design** for simplicity and transparency  

Our guiding principle is simple:

> “Build efficient, standardised and secure containers.”

---

## ⚙️ Built with TrueNAS in Mind

While **ContainerForge** isn’t built exclusively *for* TrueNAS, it’s designed to work **exceptionally well** with TrueNAS’ **Custom App** and **Docker Compose** deployment options.

Here’s how we make that experience smoother:

- **Correct Default User (`568:568`)** – Matches TrueNAS’ Apps user to avoid permission issues  
- **Automatic Update Control** – TrueNAS can automatically track and update containers by digest, patch, minor, or major version  
- **Consistent Configuration Paths** – Standardized `/config` directories simplify backups and migration  
- **Ubuntu-based Base Images** – Ensuring stable, secure, and well-supported foundations  

These considerations make deploying **ContainerForge** images on TrueNAS a clean and predictable experience — without needing extra tweaks or compatibility layers.

---

## 🧱 Standardised, Extensible, and Transparent

ContainerForge builds upon the experience of existing projects such as [home-operations](https://github.com/home-operations), [linuxserver.io](https://linuxserver.io/), and [hotio.dev](https://hotio.dev/).

What makes it different:

- **Consistent Standards** — All images follow a unified base and structure  
- **Transparency** — Each build is verifiable with GitHub Actions attestations  
- **Community Alignment** — Designed for TrueCharts integration and home-lab friendliness  

And because every image shares a common, well-defined base (Ubuntu, Python, Node, Golang, Java, etc.), ContainerForge enables fast, reliable updates across the board.

---

## 🧰 What’s Next

This is only the beginning.  
We’re planning to expand **ContainerForge** with **pre-made example Docker Compose files**, making deployment even easier for users who prefer direct container setups over Helm or Kubernetes.

Our long-term goal: provide a complete, consistent container ecosystem that works great everywhere — whether through **TrueCharts**, **TrueNAS**, or standalone **Docker Compose** setups.

---

## 📦 Explore Today

Start exploring the collection now:  
👉 [GitHub Packages](https://github.com/orgs/trueforge-org/packages)

Full documentation and details:  
👉 [trueforge.org/truetech/containerforge](https://trueforge.org/truetech/containerforge/)

---

## 💬 Get Involved

ContainerForge is an open, community-driven project.  
We welcome feedback, contributions, and discussions from everyone interested in building and running better containers.

Join us on **GitHub** or **Discord**, and help shape the next generation of container infrastructure for the TrueForge ecosystem.
