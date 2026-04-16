---
title: cluster init
---
## forgetool cluster init

generate Basic forgetool file-and-folder structure in current folder

### Synopsis

forgetool requires a specific directory layout to ensure smooth operators and standardised environments.

To ensure smooth deployment, the init function can pre-generate all required files in the right places.
Afterwards, you can edit talconfig.yaml and clusterenv.yaml to reflect your personal settings.

When done, please run forgetool genconfig to generate all configurations based on your personal settings.

```
forgetool cluster init [flags]
```

### Examples

```
forgetool cluster init
```

### Options

```
  -h, --help   help for cluster init
```

### Options inherited from parent commands

```
      --cluster string   Cluster name (default "main")
```
