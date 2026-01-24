---
title: encrypt
---
## forgetool encrypt

Encrypt all high-risk data using sops

### Synopsis

The encryption feature of forgetool goes over all config files and, if not encrypted already, checks if ".sops.yaml" mandates that they should be encrypted.
Afterwards, they are encrypted using your "age.agekey" file as specified in ".sops.yaml".

```
forgetool encrypt [flags]
```

### Examples

```
forgetool encrypt
```

### Options

```
  -h, --help   help for encrypt
```

### Options inherited from parent commands

```
      --cluster string   Cluster name (default "main")
```
