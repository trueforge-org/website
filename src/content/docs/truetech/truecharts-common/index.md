---
title: common
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](/truecharts-common#full-examples) section for complete examples.

:::

## Appears in

- `.Values`

## Notes

This applies across all the documentation:

- Helm `tpl`:
  - ❌ means that the value is not templated
  - ✅ means that the value is templated,
    for example instead of a hardcoded value, you can set it to `{{ .Values.some.value }}`.
    and it will be replaced by the value contained in `.Values.some.value` at the installation/upgrade time.

---

## `global`

Global values that apply to all charts

:::note

See more info about global values [here](/truecharts-common/global)

:::

|            |                                     |
| ---------- | ----------------------------------- |
| Key        | `global`                            |
| Type       | `map`                               |
| Required   | ❌                                   |
| Helm `tpl` | ❌                                   |
| Default    | See [here](/truecharts-common/global#defaults) |

Example

```yaml
global: {}
```

---

## `fallbackDefaults`

The fallback defaults are used when a value is not defined in the chart.

:::note

- See more info about fallbackDefaults [here](/truecharts-common/fallbackdefaults)

:::

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `fallbackDefaults`                            |
| Type       | `map`                                         |
| Required   | ❌                                             |
| Helm `tpl` | ❌                                             |
| Default    | See [here](/truecharts-common/fallbackdefaults#defaults) |

---

## `extraTpl`

Define kubernetes resources, 1 per list item, tpl will be resolved

|            |                    |
| ---------- | ------------------ |
| Key        | `extraTpl`         |
| Type       | `list` of `string` |
| Required   | ❌                  |
| Helm `tpl` | ✅                  |
| Default    | `[]`               |

Example

```yaml
extraTpl:
  - |
    apiVersion: v1
    kind: Deployment
    ...
```

---

## `operator`

Contains specific settings for helm charts containing or using system

|            |            |
| ---------- | ---------- |
| Key        | `operator` |
| Type       | `map`      |
| Required   | ❌          |
| Helm `tpl` | ❌          |

Default

```yaml
operator:
  register: false
  verify:
    enabled: true
    additionalsystem: []
```

Example

```yaml
operator:
  register: true
  verify:
    enabled: true
    additionalsystem:
      - operator1
      - operator2
```

---

### `operator.register`

Adds a configmap in the operator's namespace to register the chart as an operator

|            |                     |
| ---------- | ------------------- |
| Key        | `operator.register` |
| Type       | `bool`              |
| Required   | ❌                   |
| Helm `tpl` | ❌                   |
| Default    | `false`             |

Example

```yaml
operator:
  register: true
```

---

### `operator.verify`

Contains specific settings for verifying system

|            |                   |
| ---------- | ----------------- |
| Key        | `operator.verify` |
| Type       | `map`             |
| Required   | ❌                 |
| Helm `tpl` | ❌                 |

Default

```yaml
operator:
  verify:
    enabled: true
    additionalsystem: []
```

Example

```yaml
operator:
  verify:
    enabled: true
    additionalsystem:
      - operator1
      - operator2
```

---

#### `operator.verify.enabled`

Enables or disables the verification of system

|            |                           |
| ---------- | ------------------------- |
| Key        | `operator.verify.enabled` |
| Type       | `bool`                    |
| Required   | ❌                         |
| Helm `tpl` | ❌                         |
| Default    | `true`                    |

Example

```yaml
operator:
  verify:
    enabled: true
```

---

#### `operator.verify.additionalsystem`

Additional system to verify

|            |                                    |
| ---------- | ---------------------------------- |
| Key        | `operator.verify.additionalsystem` |
| Type       | `list` of `string`                 |
| Required   | ❌                                  |
| Helm `tpl` | ❌                                  |
| Default    | `[]`                               |

Example

```yaml
operator:
  verify:
    additionalsystem:
      - operator1
      - operator2
```

---

## `podOptions`

Options that apply to all pods, unless overridden at the pod level

:::note

See more info about podOptions [here](/truecharts-common/podoptions)

:::

|            |                                         |
| ---------- | --------------------------------------- |
| Key        | `podOptions`                            |
| Type       | `map`                                   |
| Required   | ❌                                       |
| Helm `tpl` | ❌                                       |
| Default    | See [here](/truecharts-common/podoptions#defaults) |

Example

```yaml
podOptions:
  enableServiceLinks: false
  hostNetwork: false
  hostPID: false
  hostUsers: false
  hostIPC: false
  shareProcessNamespace: false
  restartPolicy: Always
  dnsPolicy: ClusterFirst
  dnsConfig:
    options:
      - name: ndots
        value: "1"
  hostAliases: []
  tolerations: []
  runtimeClassName: ""
  automountServiceAccountToken: false
  terminationGracePeriodSeconds: 120
```

---

## `containerOptions`

Options that apply to all containers, unless overridden at the container level

:::note

See more info about containerOptions [here](/truecharts-common/containeroptions)

:::

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `containerOptions`                            |
| Type       | `map`                                         |
| Required   | ❌                                             |
| Helm `tpl` | ❌                                             |
| Default    | See [here](/truecharts-common/containeroptions#defaults) |

Example

```yaml
containerOptions:
  NVIDIA_CAPS:
    - all
```

---

## `TZ`

Timezone that is used everywhere applicable, unless overridden at the container level

|            |       |
| ---------- | ----- |
| Key        | `TZ`  |
| Type       | `map` |
| Required   | ✅     |
| Helm `tpl` | ❌     |
| Default    | `UTC` |

Example

```yaml
TZ: UTC
```

---

## `namespace`

Namespace to apply to all objects, unless overridden at the object level

:::note

Does not apply to chart deps, use global.namespace for that

:::

---

## `resources`

Define resources for all containers, unless overridden at the container level

:::note

Resources apply to **EACH** container, not to the pod as a whole.

:::

|            |                                        |
| ---------- | -------------------------------------- |
| Key        | `resources`                            |
| Type       | `map`                                  |
| Required   | ✅                                      |
| Helm `tpl` | ❌                                      |
| Default    | See [here](/truecharts-common/resources#defaults) |

Example

```yaml
resources:
  limits:
    cpu: 4000m
    memory: 8Gi
  requests:
    cpu: 10m
    memory: 50Mi
```

---

## `securityContext`

Define security context for all containers and pods, unless overridden at the container/pod level

:::note

See more info about securityContext [here](/truecharts-common/securitycontext)

:::

|            |                                              |
| ---------- | -------------------------------------------- |
| Key        | `securityContext`                            |
| Type       | `map`                                        |
| Required   | ✅                                            |
| Helm `tpl` | ❌                                            |
| Default    | See [here](/truecharts-common/securitycontext#defaults) |

Example

```yaml
securityContext:
  container:
    PUID: 568
    UMASK: "002"
    runAsNonRoot: true
    runAsUser: 568
    runAsGroup: 568
    readOnlyRootFilesystem: true
    allowPrivilegeEscalation: false
    privileged: false
    seccompProfile:
      type: RuntimeDefault
    capabilities:
      add: []
      drop:
        - ALL
  pod:
    fsGroup: 568
    fsGroupChangePolicy: OnRootMismatch
    supplementalGroups: []
    sysctls: []
```

---

## Images

:::tip

Use [`imageSelector`](/truecharts-common/container#imageselector) to select the image to use for a container.

:::

Images are defined in the following format:

```yaml
image:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

For additional images, you can define them in the following format:

```yaml
nameImage:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

:::note

There isn't anything special in the above format (`nameImage`), it's just a convention.
It's also a format that some external tools can use for automatic image updates.
For example, [Renovate](https://docs.renovatebot.com/modules/manager/helm-values/#additional-information)

:::

---

### `image`

Defines the image details

|            |         |
| ---------- | ------- |
| Key        | `image` |
| Type       | `map`   |
| Required   | ✅       |
| Helm `tpl` | ❌       |

Default

```yaml
image:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

Example

```yaml
image:
  repository: "my-repo"
  tag: "latest"
  pullPolicy: IfNotPresent
```

---

### `image.repository`

Defines the image repository

|            |                    |
| ---------- | ------------------ |
| Key        | `image.repository` |
| Type       | `string`           |
| Required   | ✅                  |
| Helm `tpl` | ❌                  |
| Default    | `""`               |

Example

```yaml
image:
  repository: "my-repo"
```

---

### `image.tag`

Defines the image tag

|            |             |
| ---------- | ----------- |
| Key        | `image.tag` |
| Type       | `string`    |
| Required   | ✅           |
| Helm `tpl` | ❌           |
| Default    | `""`        |

Example

```yaml
image:
  tag: "latest"
```

---

### `image.pullPolicy`

Defines the image pull policy

|            |                    |
| ---------- | ------------------ |
| Key        | `image.pullPolicy` |
| Type       | `string`           |
| Required   | ✅                  |
| Helm `tpl` | ❌                  |
| Default    | `IfNotPresent`     |

Example

```yaml
image:
  pullPolicy: IfNotPresent
```

---

## Additional Documentation

- [certificate](/truecharts-common/certificate)
- [configmap](/truecharts-common/configmap)
- [container](/truecharts-common/container)
- [containerOptions](/truecharts-common/containeroptions)
- [imagePullSecret](/truecharts-common/imagepullsecret)
- [ingress](/truecharts-common/ingress)
- [middlewares](/truecharts-common/middlewares)
- [notes](/truecharts-common/notes)
- [persistence](/truecharts-common/persistence)
- [podDisruptionBudget](/truecharts-common/poddisruptionbudget)
- [priorityClass](/truecharts-common/priorityclass)
- [rbac](/truecharts-common/rbac)
- [resources](/truecharts-common/resources)
- [secret](/truecharts-common/secret)
- [securityContext](/truecharts-common/securitycontext)
- [service](/truecharts-common/service)
- [serviceAccount](/truecharts-common/serviceaccount)
- [storageClass](/truecharts-common/storageclass)
- [volumeSnapshot](/truecharts-common/volumesnapshot)
- [volumeSnapshotClass](/truecharts-common/volumesnapshotclass)
- [webhook](/truecharts-common/webhook)
- [webhook](/truecharts-common/webhook)
- [workload](/truecharts-common/workload)

---

## Full Examples

```yaml
operator:
  register: false
  verify:
    enabled: true
    additionalsystem:
      - operator1
      - operator2
extraTpl:
  - |
    apiVersion: v1
    kind: Deployment
    ...
```
---
---

![Version: 28.26.1](https://img.shields.io/badge/Version-28.26.1-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.11.0](https://img.shields.io/badge/AppVersion-1.11.0-informational?style=flat-square)

Function library for TrueCharts

## Chart Sources

- https://ghcr.io/cloudnative-pg/postgis
- https://ghcr.io/cloudnative-pg/postgresql
- https://ghcr.io/tensorchord/cloudnative-pgvecto.rs
- https://ghcr.io/traefik/whoami
- https://github.com/truecharts/charts/tree/master/charts/library/common
- https://github.com/trueforge-org/truecharts/tree/master/charts/library/common
- https://hub.docker.com/_/
- https://hub.docker.com/r/mikefarah/yq

## Available Documentation

- [**Addons**](./addons)
- [**Certificate**](./certificate)
- [**Configmap**](./configmap)
- [**Container Options**](./containeroptions)
- [**credentials**](./credentials)
- [**Fallback Defaults**](./fallbackdefaults)
- [**Global**](./global)
- [**Image Pull Secret**](./imagepullsecret)
- [**Notes**](./notes)
- [**Pod Disruption Budget**](./poddisruptionbudget)
- [**Pod Options**](./podoptions)
- [**Priority Class**](./priorityclass)
- [**RBAC**](./rbac)
- [**Resources**](./resources)
- [**Secret**](./secret)
- [**Security Context**](./securitycontext)
- [**Service Account**](./serviceaccount)
- [**Storage Class**](./storageclass)
- [**Volume Snapshot**](./volumesnapshot)
- [**Volume Snapshot Class**](./volumesnapshotclass)
- [**Webhook**](./webhook)


---

## Readme


### General Info

For more information about this Chart, please check the docs on the TrueCharts [website](https://trueforge.org/truecharts/library/common)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/trueforge-org/truecharts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://oci.trueforge.org/truecharts/common`

For more information on how to install TrueCharts Helm charts, checkout the [instructions on the website](https://trueforge.org/truecharts/guides/)

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://trueforge.org/truecharts/library/common

### Configuration Options

To view the chart specific options, please view Values.yaml included in the chart.
The most recent version of which, is available here: https://github.com/trueforge-org/truecharts/blob/master/charts/library/common/values.yaml

All our Charts use a shared "common" library chart that contains most of the templating and options.
For the complete overview of all available options, please checkout the documentation for them on the [common docs on our website](https://trueforge.org/truecharts-common/)

For information about the common chart and all defaults included with it, please review its values.yaml file available here: https://github.com/trueforge-org/truecharts/blob/master/charts/library/common/values.yaml

### Support

- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/trueforge-org/truecharts/issues/new/choose)

---

### Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](https://trueforge.org/general/sponsor/) or contributing back to the project any way you can!

_All Rights Reserved - The TrueCharts Project_
