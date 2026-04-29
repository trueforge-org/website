---
title: decrypt
---
## forgetool decrypt

Decrypt all high-risk data using sops

### Synopsis

The decryption feature of forgetool goes over all config files and, if encrypted, checks if ".sops.yaml" specifies that they should be decrypted.
If so, they are decrypted using your "age.agekey" file as specified in ".sops.yaml".

```
forgetool decrypt [flags]
```

### Examples

```
forgetool decrypt
```

### Options

```
  -h, --help   help for decrypt
```

### Options inherited from parent commands

```
      --cluster string   Cluster name (default "main")
```
