# JavaScript

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: '@azure-rest/newservice-demo'
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
require:
  - /spec-repo/specification/demoservice/data-plane/readme.md
rest-level-client: true
use-extension:
  '@autorest/typescript': 6.0.0-beta.14
```  
