#!/usr/bin/env bash
code-gen-pipeline --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@6.0.0-alpha.20.20220608.1 --cadlEmitter=@azure-tools/cadl-typescript
