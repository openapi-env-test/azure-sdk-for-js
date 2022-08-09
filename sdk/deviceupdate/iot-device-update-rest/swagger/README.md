# Azure IOT Device Update TypeScript Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: '@azure-rest/iot-device-update'
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
require:
  - https://github.com/Azure/azure-rest-api-specs/blob/9e30496a8803beb5a84909997e5cd7ea0f242fd8/specification/deviceupdate/data-plane/readme.md
rest-level-client: true
add-credentials: true
credential-scopes: https://api.adu.microsoft.com/.default
use-extension:
  '@autorest/typescript': 6.0.0-beta.20
```
