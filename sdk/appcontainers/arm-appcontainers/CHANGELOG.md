# Release History
    
## 2.0.0 (2022-07-13)
    
**Features**

  - Added operation ContainerApps.update
  - Added operation ManagedEnvironments.update
  - Added Interface ContainerAppPatch
  - Added Interface ManagedEnvironmentPatch
  - Added Type Alias ContainerAppsUpdateResponse
  - Added Type Alias ManagedEnvironmentsUpdateResponse
  - Interface GithubActionConfiguration has a new optional parameter dockerfilePath

**Breaking Changes**

  - Removed operation group Namespaces
  - Removed operation ContainerApps.beginUpdate
  - Removed operation ContainerApps.beginUpdateAndWait
  - Removed operation DaprComponents.listSecrets
  - Removed operation ManagedEnvironments.beginUpdate
  - Removed operation ManagedEnvironments.beginUpdateAndWait
  - Interface ContainerAppsRevisionsListRevisionsNextOptionalParams no longer has parameter filter
  - Interface ContainerAppsRevisionsListRevisionsOptionalParams no longer has parameter filter
  - Interface ContainerAppsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ContainerAppsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface GithubActionConfiguration no longer has parameter contextPath
  - Interface GithubActionConfiguration no longer has parameter image
  - Interface ManagedEnvironmentsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ManagedEnvironmentsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface RegistryCredentials no longer has parameter identity
  - Interface TrafficWeight no longer has parameter label
  - Class ContainerAppsAPIClient no longer has parameter namespaces
  - Type Alias ManagedEnvironment no longer has parameter daprAIConnectionString
  - Type Alias ManagedEnvironment no longer has parameter zoneRedundant
  - Removed Enum KnownCheckNameAvailabilityReason
    
    
## 1.0.0 (2022-05-20)

The package of @azure/arm-appcontainers is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
