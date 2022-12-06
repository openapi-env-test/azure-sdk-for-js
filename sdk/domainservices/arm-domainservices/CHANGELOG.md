# Release History
    
## 4.2.0 (2022-12-06)
    
**Features**

  - Added Type Alias ChannelBinding
  - Added Type Alias LdapSigning
  - Added Type Alias SyncScope
  - Interface DomainSecuritySettings has a new optional parameter channelBinding
  - Interface DomainSecuritySettings has a new optional parameter ldapSigning
  - Interface DomainService has a new optional parameter syncApplicationId
  - Interface DomainService has a new optional parameter syncScope
  - Added Enum KnownChannelBinding
  - Added Enum KnownLdapSigning
  - Added Enum KnownSyncScope
    
    
## 4.1.0 (2022-11-22)
    
**Features**

  - Added Interface DomainService
  - Added Interface OuContainer
    
## 4.0.1 (2022-04-18)

**features**

  - Bug fix

## 4.0.0 (2022-01-13)

The package of @azure/arm-domainservices is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
