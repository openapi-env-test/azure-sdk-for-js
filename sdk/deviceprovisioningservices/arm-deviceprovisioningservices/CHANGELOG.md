# Release History
    
## 6.0.0 (2022-08-08)
    
**Features**

  - Added Interface ErrorDetailsError
  - Interface ErrorDetails has a new optional parameter error
  - Interface IotDpsPropertiesDescription has a new optional parameter portalOperationsHostName
  - Interface Operation has a new optional parameter isDataAction
  - Type Alias ProvisioningServiceDescription has a new parameter tags

**Breaking Changes**

  - Interface ErrorDetails no longer has parameter code
  - Interface ErrorDetails no longer has parameter details
  - Interface ErrorDetails no longer has parameter httpStatusCode
  - Interface ErrorDetails no longer has parameter message
    
## 5.0.1 (2022-04-27)
    
**Features**

  -  Bug fix
    
## 5.0.0 (2022-04-25)
    
**Features**

  - Added Interface ErrorMessage
  - Added Interface IotDpsResourceDeletePrivateEndpointConnectionHeaders

**Breaking Changes**

  - Operation DpsCertificate.createOrUpdate has a new signature
    
    
## 4.1.1 (2022-04-18)

**features**

  - bug fix

## 4.1.0 (2022-01-24)
    
**Features**

  - Added Interface SystemData
  - Added Type Alias CreatedByType
  - Interface CertificateResponse has a new optional parameter systemData
  - Interface IotDpsPropertiesDescription has a new optional parameter enableDataResidency
  - Interface PrivateEndpointConnection has a new optional parameter systemData
  - Type Alias ProvisioningServiceDescription has a new parameter systemData
  - Added Enum KnownCreatedByType
    
    
## 4.0.0 (2022-01-12)

The package of @azure/arm-deviceprovisioningservices is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
