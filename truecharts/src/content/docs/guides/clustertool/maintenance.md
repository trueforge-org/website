---
sidebar:
  order: 4
title: Cluster Commands
---

## General important commands

### Init Command

`clustertool init`

:::caution[Guide]

NEVER run this command on an already bootstrapped cluster. THis will lead to files being overwritten and your cluster possibly broken.
Only used during initial setup.

:::

### Genconfig Command

`clustertool genconfig`

This command is to update certain files.
This especially is needed when you add a new chart to automate the kustomization changes needed and/or when clusterenv.yaml is changed.
Otherwise new ENV in clusterenv.yaml wont be available in your cluster.

## Encryption Commands

These commands are used to encrypt/decrypt and check files for encryption.

:::caution[Guide]

These commands will only work with your agekey still accessible in the repo. Always make sure to have a backup otherwise those files will be lost.

:::

### Encrypt Command

`clustertool encrypt`

This command will encrypt your files to be ready to be pushed to git. Nobody can decrypt them without your agekey.

### Decrypt Command

`clustertool decrypt`

This command will decrypt your files so you can modify them locally when needed. Always make sure to encrypt before pushing them to git again.

### Checkcrypt Command

`clustertool checkcrypt`

This checks the current state of your files if they are encrypted and you are unsure about it.

## Talos Commands

These commands are used to manage certain Talos specific commands

### Talos apply Command

`clustertool talos apply`

This command is to initially bootstrap your cluster as well as when you added additional patches to your talconfig.yaml.
This can possible restart your cluster if needed.
THis wont add new extensions to your cluster.

### Talos upgrade Command

`clustertool talos upgrade`

This command is used to update your cluster when you changed extensions and add those to your cluster.

### Talos health Command

`clustertool talos health`

This command is to check your cluster for its current status and health state.

### Talos kubeconfig Command

`clustertool talos kubeconfig`

This command checks the cluster for health and generates a new kubeconfig if you ever lost your existing one.

### Talos reset Command

`clustertool talos reset`

:::caution[Guide]

This command is destructive and will reset your entire talos VM. Do not use unless you want to restart.

:::

## Advanced Commands

These commands are generally not needed if you follow our Getting Started Guide and dont do anything special.

### Precommit Command

`clustertool precommit`

This command runs the precommit check and makes sure all files are encrypted before pushing.
This is added to the git settings and should already run on every commit by default.

### Flux Bootstrap Command

`clustertool flux bootstrap`

This command is to bootstrap flux after doing the initial setup without. We generally advice people to bootstrap flux right from the start.
