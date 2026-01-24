---
title: FixedEnv
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](/truetech/truecharts-common/container/fixedenv#full-examples) section for complete examples.

:::

:::tip

Variable names will be scanned for duplicates across all
[secrets](/truetech/truecharts-common/secret), [configmaps](/truetech/truecharts-common/configmap),
[env](/truetech/truecharts-common/container/env), [envList](/truetech/truecharts-common/container/envlist) and [fixedEnv](/truetech/truecharts-common/container/fixedenv)
and will throw an error if it finds any.

:::

## Appears in

- `.Values.workload.$name.podSpec.containers.$name`
- `.Values.workload.$name.podSpec.initContainers.$name`

---

## `fixedEnv`

Override fixedEnv for the container

:::note

By default it will set the following environment variables:

- `TZ`: [Default TZ](/truecharts-common#tz) or [fixedEnv.TZ](/truetech/truecharts-common/container/fixedenv#fixedenvtz)
- `UMASK`: [Default UMASK](/truetech/truecharts-common/securitycontext#securitycontextcontainerumask) or [fixedEnv.UMASK](/truetech/truecharts-common/container/fixedenv#fixedenvumask)
- `UMASK_SET`: [Default UMASK](/truetech/truecharts-common/securitycontext#securitycontextcontainerumask) or [fixedEnv.UMASK](/truetech/truecharts-common/container/fixedenv#fixedenvumask)
- `S6_READ_ONLY_ROOT`: `1`
  - Only when [`readOnlyRootFilesystem`](/truetech/truecharts-common/container/securitycontext#securitycontextreadonlyrootfilesystem) or [`runAsNonRoot`](/truetech/truecharts-common/container/securitycontext#securitycontextrunasnonroot) is `true`
- `PUID`, `USER_ID`, `UID`: [Default PUID](/truetech/truecharts-common/securitycontext#securitycontextcontainerpuid) or [fixedEnv.PUID](/truetech/truecharts-common/container/fixedenv#fixedenvpuid)
  - Only when [`runAsUser`](/truetech/truecharts-common/securitycontext#securitycontextcontainerrunasuser) or [`runAsGroup`](/truetech/truecharts-common/securitycontext#securitycontextcontainerrunasgroup) is `0`
- `PGID`, `GROUP_ID`, `GID`: Same as [`fsGroup`](/truetech/truecharts-common/securitycontext#securitycontextpodfsgroup)
  - Only when [`runAsUser`](/truetech/truecharts-common/securitycontext#securitycontextcontainerrunasuser) or [`runAsGroup`](/truetech/truecharts-common/securitycontext#securitycontextcontainerrunasgroup) is `0`
- `NVIDIA_DRIVER_CAPABILITIES`: [Default NVIDIA_CAPS](/truetech/truecharts-common/containeroptions#nvidia_caps) or [fixedEnv.NVIDIA_CAPS](/truetech/truecharts-common/container/fixedenv#fixedenvnvidia_caps)
  - Only when `nvidia.com/gpu` is set to `> 0` under [`resources`](/truetech/truecharts-common/container/resources)

:::

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv` |
| Type       | `map`                                              |
| Required   | ❌                                                 |
| Helm `tpl` | ❌                                                 |
| Default    | `{}`                                               |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv: {}
```

---

### `fixedEnv.TZ`

Override the timezone for the container

|            |                                                       |
| ---------- | ----------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.TZ` |
| Type       | `string`                                              |
| Required   | ❌                                                    |
| Helm `tpl` | ❌                                                    |
| Default    | See [here](/truecharts-common#tz)                        |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            TZ: "America/New_York"
```

---

### `fixedEnv.UMASK`

Override the umask for the container

|            |                                                                            |
| ---------- | -------------------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.UMASK`                   |
| Type       | `string`                                                                   |
| Required   | ❌                                                                         |
| Helm `tpl` | ❌                                                                         |
| Default    | See [here](/truetech/truecharts-common/securitycontext/#securitycontextcontainerumask) |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            UMASK: "003"
```

---

### `fixedEnv.PUID`

Override the PUID for the container

|            |                                                                           |
| ---------- | ------------------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.PUID`                   |
| Type       | `string`                                                                  |
| Required   | ❌                                                                        |
| Helm `tpl` | ❌                                                                        |
| Default    | See [here](/truetech/truecharts-common/securitycontext/#securitycontextcontainerpuid) |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            PUID: "0"
```

---

### `fixedEnv.NVIDIA_CAPS`

Override the NVIDIA_CAPS for the container

|            |                                                                |
| ---------- | -------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.NVIDIA_CAPS` |
| Type       | `list`                                                         |
| Required   | ❌                                                             |
| Helm `tpl` | ❌                                                             |
| Default    | See [here](/truetech/truecharts-common/containeroptions#nvidia_caps)       |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            NVIDIA_CAPS:
              - compute
```

---

## Full Examples

```yaml
workload:
  workload-name:
    enabled: true
    primary: true
    podSpec:
      containers:
        container-name:
          enabled: true
          primary: true
          fixedEnv:
            TZ: "America/New_York"
            NVIDIA_CAPS:
              - compute
            UMASK: "003"
            PUID: "0"
```
