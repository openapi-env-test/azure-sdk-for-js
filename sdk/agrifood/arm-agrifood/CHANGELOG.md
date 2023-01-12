# Release History
    
## 1.0.0-beta.5 (2023-01-12)
    
**Features**

  - Added operation FarmBeatsModels.update
  - Added Interface AzureAgriFoodRPServiceOptionalParams
  - Added Class AzureAgriFoodRPService
  - Interface Extension has a new optional parameter systemData
  - Interface FarmBeats has a new optional parameter provisioningStateSz
  - Interface FarmBeats has a new optional parameter systemData
  - Interface FarmBeatsExtension has a new optional parameter systemData

**Breaking Changes**

  - Removed operation group PrivateEndpointConnections
  - Removed operation group PrivateLinkResources
  - Removed operation FarmBeatsModels.beginUpdate
  - Removed operation FarmBeatsModels.beginUpdateAndWait
  - Removed operation FarmBeatsModels.getOperationResult
  - Deleted Class AgriFoodMgmtClient
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter extensionCategories
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter extensionIds
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter maxPageSize
  - Interface ExtensionsListByFarmBeatsNextOptionalParams no longer has parameter skipToken
  - Interface FarmBeats no longer has parameter identity
  - Interface FarmBeats no longer has parameter privateEndpointConnections
  - Interface FarmBeats no longer has parameter provisioningState
  - Interface FarmBeats no longer has parameter publicNetworkAccess
  - Interface FarmBeats no longer has parameter sensorIntegration
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter extensionCategories
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter farmBeatsExtensionIds
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter farmBeatsExtensionNames
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter maxPageSize
  - Interface FarmBeatsExtensionsListNextOptionalParams no longer has parameter publisherIds
  - Interface FarmBeatsModelsListByResourceGroupNextOptionalParams no longer has parameter maxPageSize
  - Interface FarmBeatsModelsListByResourceGroupNextOptionalParams no longer has parameter skipToken
  - Interface FarmBeatsModelsListBySubscriptionNextOptionalParams no longer has parameter maxPageSize
  - Interface FarmBeatsModelsListBySubscriptionNextOptionalParams no longer has parameter skipToken
  - Interface FarmBeatsModelsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface FarmBeatsModelsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface FarmBeatsUpdateRequestModel no longer has parameter identity
  - Interface FarmBeatsUpdateRequestModel no longer has parameter properties
  - Interface Resource no longer has parameter systemData
  - Removed Enum KnownPrivateEndpointConnectionProvisioningState
  - Removed Enum KnownPrivateEndpointServiceConnectionStatus
  - Removed Enum KnownPublicNetworkAccess
  - Enum KnownProvisioningState no longer has value Creating
  - Enum KnownProvisioningState no longer has value Deleting
  - Enum KnownProvisioningState no longer has value Updating
    
    
## 1.0.0-beta.4 (2022-11-14)
    
**Features**

  - Bugs Fixed
    
## 1.0.0-beta.3 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 1.0.0-beta.2 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 1.0.0-beta.1 (2022-08-31)

The package of @azure/arm-agrifood is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
