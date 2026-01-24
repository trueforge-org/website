---
title: Pod Options
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](/truetech/truecharts-common/podoptions#full-examples) section for complete examples.

:::

## Appears in

- `.Values.podOptions`

## Defaults

```yaml
podOptions:
  enableServiceLinks: false
  hostNetwork: false
  hostPID: false
  hostIPC: false
  hostUsers: false
  shareProcessNamespace: false
  restartPolicy: Always
  dnsPolicy: ClusterFirst
  dnsConfig:
    options:
      - name: ndots
        value: "1"
  hostAliases: []
  nodeSelector:
    kubernetes.io/arch: "amd64"
  defaultSpread: true
  topologySpreadConstraints: []
  tolerations: []
  schedulerName: ""
  priorityClassName: ""
  runtimeClassName: ""
  automountServiceAccountToken: false
  terminationGracePeriodSeconds: 60
```

---

## `enableServiceLinks`

See [Enable Service Links](/truetech/truecharts-common/workload#enableservicelinks)

Default

```yaml
podOptions:
  enableServiceLinks: false
```

---

## `hostNetwork`

See [Host Network](/truetech/truecharts-common/workload#hostnetwork)

Default

```yaml
podOptions:
  hostNetwork: false
```

---

## `hostPID`

See [Host PID](/truetech/truecharts-common/workload#hostpid)

Default

```yaml
podOptions:
  hostPID: false
```

---

## `hostIPC`

See [Host IPC](/truetech/truecharts-common/workload#hostipc)

Default

```yaml
podOptions:
  hostIPC: false
```

---

## `hostUsers`

See [Host Users](/truetech/truecharts-common/workload#hostusers)

Default

```yaml
podOptions:
  hostUsers: false
```

---

## `shareProcessNamespace`

See [Share Process Namespace](/truetech/truecharts-common/workload#shareprocessnamespace)

Default

```yaml
podOptions:
  shareProcessNamespace: false
```

---

## `restartPolicy`

See [Restart Policy](/truetech/truecharts-common/workload#restartpolicy)

Default

```yaml
podOptions:
  restartPolicy: Always
```

---

## `dnsPolicy`

See [DNS Policy](/truetech/truecharts-common/workload#dnspolicy)

Default

```yaml
podOptions:
  dnsPolicy: ClusterFirst
```

---

## `dnsConfig`

See [DNS Config](/truetech/truecharts-common/workload#dnsconfig)

Default

```yaml
podOptions:
  dnsConfig:
    options:
      - name: ndots
        value: "1"
```

---

## `hostAliases`

See [Host Aliases](/truetech/truecharts-common/workload#hostaliases)

Default

```yaml
podOptions:
  hostAliases: []
```

---

## `nodeSelector`

See [Node Selector](/truetech/truecharts-common/workload#nodeselector)

Default

```yaml
podOptions:
  nodeSelector:
    kubernetes.io/arch: "amd64"
```

---

## `defaultSpread`

Sets some default topology spread constraints for good spread of pods across nodes.

Default

```yaml
podOptions:
  defaultSpread: true
```

---

## `topologySpreadConstraints`

See [Topology Spread Constraints](/truetech/truecharts-common/workload#topologyspreadconstraints)

Default

```yaml
podOptions:
  topologySpreadConstraints: []
```

---

## `tolerations`

See [Tolerations](/truetech/truecharts-common/workload#tolerations)

Default

```yaml
podOptions:
  tolerations: []
```

---

## `schedulerName`

See [Scheduler Name](/truetech/truecharts-common/workload#schedulername)

Default

```yaml
podOptions:
  schedulerName: ""
```

---

## `priorityClassName`

See [Priority Class Name](/truetech/truecharts-common/workload#priorityclassname)

Default

```yaml
podOptions:
  priorityClassName: ""
```

---

## `runtimeClassName`

See [Runtime Class Name](/truetech/truecharts-common/workload#runtimeclassname)

Default

```yaml
podOptions:
  runtimeClassName: ""
```

---

## `automountServiceAccountToken`

See [Automount Service Account Token](/truetech/truecharts-common/workload#automountserviceaccounttoken)

Default

```yaml
podOptions:
  automountServiceAccountToken: false
```

---

## `terminationGracePeriodSeconds`

See [Termination Grace Period Seconds](/truetech/truecharts-common/workload#terminationgraceperiodseconds)

Default

```yaml
podOptions:
  terminationGracePeriodSeconds: 60
```

---

## Full Examples

```yaml
podOptions:
  enableServiceLinks: false
  hostNetwork: false
  hostPID: false
  hostIPC: false
  hostUsers: false
  shareProcessNamespace: false
  restartPolicy: Always
  dnsPolicy: ClusterFirst
  dnsConfig:
    options:
      - name: ndots
        value: "1"
  hostAliases: []
  nodeSelector:
    kubernetes.io/arch: "amd64"
  defaultSpread: true
  topologySpreadConstraints: []
  tolerations: []
  schedulerName: ""
  priorityClassName: ""
  runtimeClassName: ""
  automountServiceAccountToken: false
  terminationGracePeriodSeconds: 60
```
