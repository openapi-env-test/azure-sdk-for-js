# Release History
    
## 4.0.0 (2022-03-10)
    
**Features**

  - Added operation group AdvisorScores
  - Added Interface AdvisorScoreEntity
  - Added Interface AdvisorScoreEntityProperties
  - Added Interface AdvisorScoresGetOptionalParams
  - Added Interface AdvisorScoresListOptionalParams
  - Added Interface PathsW6Fm20SubscriptionsSubscriptionidProvidersMicrosoftAdvisorAdvisorscoreGetResponses200ContentApplicationJsonSchema
  - Added Interface ScoreEntity
  - Added Interface TimeSeriesEntityItem
  - Added Type Alias AdvisorScoresGetResponse
  - Added Type Alias AdvisorScoresListResponse
  - Added Type Alias TimeSeriesEntityItemAggregationLevel
  - Class AdvisorManagementClient has a new parameter advisorScores
  - Added Enum KnownTimeSeriesEntityItemAggregationLevel

**Breaking Changes**

  - Removed operation group Configurations
  - Removed operation group RecommendationMetadata
  - Removed operation group Recommendations
  - Removed operation group Suppressions
  - Class AdvisorManagementClient no longer has parameter configurations
  - Class AdvisorManagementClient no longer has parameter recommendationMetadata
  - Class AdvisorManagementClient no longer has parameter recommendations
  - Class AdvisorManagementClient no longer has parameter suppressions
  - Removed Enum KnownCategory
  - Removed Enum KnownConfigurationName
  - Removed Enum KnownCpuThreshold
  - Removed Enum KnownDigestConfigState
  - Removed Enum KnownImpact
  - Removed Enum KnownRisk
  - Removed Enum KnownScenario
    
    
## 3.0.0 (2021-12-29)

The package of @azure/arm-advisor is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
