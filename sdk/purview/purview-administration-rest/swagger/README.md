# JavaScript

> see https://aka.ms/autorest

## Configuration

```yaml $(multi-client)
package-name: '@azure-rest/purview-administration'
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
rest-level-client: true
add-credentials: true
credential-scopes: https://purview.azure.net/.default
require:
  - https://github.com/Azure/azure-rest-api-specs/blob/9e30496a8803beb5a84909997e5cd7ea0f242fd8/specification/purview/data-plane/readme.md
use-extension:
  '@autorest/typescript': 6.0.0-beta.20
tag: false
batch:
  - purview-account: true
  - purview-metadata: true
```
```yaml $(purview-account)
output-folder: ../
source-code-folder-path: ./src/account
title: PurviewAccount
```
```yaml $(purview-metadata)
output-folder: ../
source-code-folder-path: ./src/metadataPolicies
title: PurviewMetadataPolicies
```