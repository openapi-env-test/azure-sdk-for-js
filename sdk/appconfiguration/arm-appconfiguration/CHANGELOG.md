# Release History
    
## 4.0.0 (2022-07-13)
    
**Features**

  - Added operation ConfigurationStores.listKeyValue
  - Added Interface ConfigurationStoresListKeyValueOptionalParams
  - Added Interface ErrorModel
  - Added Interface ListKeyValueParameters
  - Added Type Alias ConfigurationStoresListKeyValueResponse
  - Interface Resource has a new optional parameter tags
  - Add parameters of Resource to TypeAlias ConfigurationStore

**Breaking Changes**

  - Removed operation group KeyValues
  - Removed operation ConfigurationStores.beginPurgeDeleted
  - Removed operation ConfigurationStores.beginPurgeDeletedAndWait
  - Removed operation ConfigurationStores.getDeleted
  - Removed operation ConfigurationStores.listDeleted
  - Removed operation Operations.regionalCheckNameAvailability
  - Interface ConfigurationStoreUpdateParameters no longer has parameter disableLocalAuth
  - Interface ConfigurationStoreUpdateParameters no longer has parameter enablePurgeProtection
  - Interface KeyValue no longer has parameter id
  - Interface KeyValue no longer has parameter name
  - Interface KeyValue no longer has parameter type
  - Interface OperationDefinition no longer has parameter isDataAction
  - Interface OperationDefinition no longer has parameter origin
  - Interface OperationDefinition no longer has parameter properties
  - Interface Resource has a new required parameter location
  - Class AppConfigurationManagementClient no longer has parameter keyValues
  - Delete parameters of TrackedResource in TypeAlias ConfigurationStore
  - Type Alias ConfigurationStore no longer has parameter systemData
  - Type Alias ConfigurationStore no longer has parameter disableLocalAuth
  - Type Alias ConfigurationStore no longer has parameter softDeleteRetentionInDays
  - Type Alias ConfigurationStore no longer has parameter enablePurgeProtection
  - Type Alias ConfigurationStore no longer has parameter createMode
  - Removed Enum KnownCreatedByType
    
    
## 3.0.0 (2022-06-10)

The package of @azure/arm-appconfiguration is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
