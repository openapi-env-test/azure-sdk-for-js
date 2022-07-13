# Release History
    
## 4.0.0 (2022-07-13)
    
**Features**

  - Added operation Recommendations.getGenerateRecommendationsStatus
  - Added Interface RecommendationsGetGenerateRecommendationsStatusOptionalParams
  - Added Interface ResourceRecommendationBase
  - Interface Resource has a new optional parameter location
  - Interface Resource has a new optional parameter tags

**Breaking Changes**

  - Removed operation group Configurations
  - Removed operation group RecommendationMetadata
  - Removed operation Recommendations.getGenerateStatus
  - Interface SuppressionsListOptionalParams no longer has parameter skipToken
  - Interface SuppressionsListOptionalParams no longer has parameter top
  - Class AdvisorManagementClient no longer has parameter configurations
  - Class AdvisorManagementClient no longer has parameter recommendationMetadata
  - Type Alias SuppressionContract no longer has parameter expirationTimeStamp
  - Removed Enum KnownConfigurationName
  - Removed Enum KnownCpuThreshold
  - Removed Enum KnownDigestConfigState
  - Removed Enum KnownScenario
  - Enum KnownCategory no longer has value OperationalExcellence
    
## 3.0.1 (2022-03-22)

**features**

  - bug fix

## 3.0.0 (2021-12-29)

The package of @azure/arm-advisor is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
