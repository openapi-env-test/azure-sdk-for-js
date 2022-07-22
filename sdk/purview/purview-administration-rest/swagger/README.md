# JavaScript

> see https://aka.ms/autorest

## Configuration

```yaml $(multi-client)
package-name: '@azure-rest/purview-administration'
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
rest-level-client: true
require:
  - /mnt/vss/_work/1/s/azure-rest-api-specs/specification/purview/data-plane/readme.md
use-extension:
  '@autorest/typescript': 6.0.0-rc.1
tag: false
batch:
  - purview-account: true
  - purview-metadata: true
```
```yaml $(purview-account)
output-folder: ../
source-code-folder-path: ./src/account
```
```yaml $(purview-metadata)
output-folder: ../
source-code-folder-path: ./src/metadataPolicies
```