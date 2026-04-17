---
title: Verifying Image Signatures
sidebar:
  order: 3
---

Container images are signed using the [attest-build-provenance](https://github.com/actions/attest-build-provenance) action.

## Using GitHub CLI

To verify that the image was built by GitHub CI:

```sh
gh attestation verify --repo trueforge-org/containers oci://oci.trueforge.org/containerforge/${APP}:${TAG}
```

## Using Cosign

You can also verify with [cosign](https://github.com/sigstore/cosign):

```sh
cosign verify-attestation --new-bundle-format --type slsaprovenance1 \
    --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
    --certificate-identity-regexp "https://github.com/trueforge-org/containerforge/blob/main/.github/workflows/app-builder.yaml" \
    oci.trueforge.org/containerforge/${APP}:${TAG}
```
