# Release History
    
## 2.1.0-beta.1 (2022-12-09)
    
**Features**

  - Added operation group ConfigurationNamesOperations
  - Added operation group Connector
  - Added operation group Linkers
  - Added Interface AccessKeyInfoBase
  - Added Interface AzureKeyVaultProperties
  - Added Interface AzureResource
  - Added Interface BasicErrorDryrunPrerequisiteResult
  - Added Interface ConfigurationInfo
  - Added Interface ConfigurationName
  - Added Interface ConfigurationNameResult
  - Added Interface ConfigurationNames
  - Added Interface ConfigurationNamesListNextOptionalParams
  - Added Interface ConfigurationNamesListOptionalParams
  - Added Interface ConfigurationResult
  - Added Interface ConfluentBootstrapServer
  - Added Interface ConfluentSchemaRegistry
  - Added Interface ConnectorCreateDryrunOptionalParams
  - Added Interface ConnectorCreateOrUpdateOptionalParams
  - Added Interface ConnectorDeleteDryrunOptionalParams
  - Added Interface ConnectorDeleteOptionalParams
  - Added Interface ConnectorGenerateConfigurationsOptionalParams
  - Added Interface ConnectorGetDryrunOptionalParams
  - Added Interface ConnectorGetOptionalParams
  - Added Interface ConnectorListDryrunNextOptionalParams
  - Added Interface ConnectorListDryrunOptionalParams
  - Added Interface ConnectorListNextOptionalParams
  - Added Interface ConnectorListOptionalParams
  - Added Interface ConnectorUpdateDryrunOptionalParams
  - Added Interface ConnectorUpdateOptionalParams
  - Added Interface ConnectorValidateOptionalParams
  - Added Interface CreateOrUpdateDryrunParameters
  - Added Interface DatabaseAadAuthInfo
  - Added Interface DryrunList
  - Added Interface DryrunOperationPreview
  - Added Interface DryrunParameters
  - Added Interface DryrunPatch
  - Added Interface DryrunPrerequisiteResult
  - Added Interface DryrunResource
  - Added Interface FirewallRules
  - Added Interface KeyVaultSecretReferenceSecretInfo
  - Added Interface KeyVaultSecretUriSecretInfo
  - Added Interface LinkerProperties
  - Added Interface LinkerResource
  - Added Interface LinkersCreateDryrunOptionalParams
  - Added Interface LinkersDeleteDryrunOptionalParams
  - Added Interface LinkersGenerateConfigurationsOptionalParams
  - Added Interface LinkersGetDryrunOptionalParams
  - Added Interface LinkersListDryrunNextOptionalParams
  - Added Interface LinkersListDryrunOptionalParams
  - Added Interface LinkersUpdateDryrunOptionalParams
  - Added Interface PermissionsMissingDryrunPrerequisiteResult
  - Added Interface ProxyResource
  - Added Interface PublicNetworkSolution
  - Added Interface ResourceList
  - Added Interface SecretAuthInfo
  - Added Interface SelfHostedServer
  - Added Interface ServicePrincipalCertificateAuthInfo
  - Added Interface ServicePrincipalSecretAuthInfo
  - Added Interface SystemAssignedIdentityAuthInfo
  - Added Interface UserAccountAuthInfo
  - Added Interface UserAssignedIdentityAuthInfo
  - Added Interface ValueSecretInfo
  - Added Type Alias AccessKeyPermissions
  - Added Type Alias AllowType
  - Added Type Alias ConfigurationNamesListNextResponse
  - Added Type Alias ConfigurationNamesListResponse
  - Added Type Alias ConnectorCreateDryrunResponse
  - Added Type Alias ConnectorCreateOrUpdateResponse
  - Added Type Alias ConnectorGenerateConfigurationsResponse
  - Added Type Alias ConnectorGetDryrunResponse
  - Added Type Alias ConnectorGetResponse
  - Added Type Alias ConnectorListDryrunNextResponse
  - Added Type Alias ConnectorListDryrunResponse
  - Added Type Alias ConnectorListNextResponse
  - Added Type Alias ConnectorListResponse
  - Added Type Alias ConnectorUpdateDryrunResponse
  - Added Type Alias ConnectorUpdateResponse
  - Added Type Alias ConnectorValidateResponse
  - Added Type Alias DeleteOrUpdateBehavior
  - Added Type Alias DryrunActionName
  - Added Type Alias DryrunParametersUnion
  - Added Type Alias DryrunPrerequisiteResultType
  - Added Type Alias DryrunPrerequisiteResultUnion
  - Added Type Alias DryrunPreviewOperationType
  - Added Type Alias LinkersCreateDryrunResponse
  - Added Type Alias LinkersGenerateConfigurationsResponse
  - Added Type Alias LinkersGetDryrunResponse
  - Added Type Alias LinkersListDryrunNextResponse
  - Added Type Alias LinkersListDryrunResponse
  - Added Type Alias LinkersUpdateDryrunResponse
  - Interface LinkerPatch has a new optional parameter configurationInfo
  - Interface LinkerPatch has a new optional parameter publicNetworkSolution
  - Interface Resource has a new optional parameter systemData
  - Interface SecretStore has a new optional parameter keyVaultSecretName
  - Interface VNetSolution has a new optional parameter deleteOrUpdateBehavior
  - Class ServiceLinkerManagementClient has a new parameter configurationNamesOperations
  - Class ServiceLinkerManagementClient has a new parameter connector
  - Class ServiceLinkerManagementClient has a new parameter linkers
  - Added Enum KnownAccessKeyPermissions
  - Added Enum KnownAllowType
  - Added Enum KnownDeleteOrUpdateBehavior
  - Added Enum KnownDryrunActionName
  - Added Enum KnownDryrunPrerequisiteResultType
  - Added Enum KnownDryrunPreviewOperationType
  - Enum KnownActionType has a new value Enable
  - Enum KnownActionType has a new value OptOut
  - Enum KnownAuthType has a new value AccessKey
  - Enum KnownAuthType has a new value UserAccount
  - Enum KnownClientType has a new value KafkaSpringBoot
  - Enum KnownTargetServiceType has a new value SelfHostedServer
    
    
## 2.0.0 (2022-05-16)
    
**Features**

  - Added Interface ValidateOperationResult
  - Enum KnownValidationResultStatus has a new value Failure

**Breaking Changes**

  - Enum KnownValidationResultStatus no longer has value Failed
    
    
## 1.0.0 (2022-04-27)

The package of @azure/arm-servicelinker is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
