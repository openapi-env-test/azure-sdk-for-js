/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface AzureDevOpsConnectorListResponse {
  /** Gets or sets list of resources. */
  value?: AzureDevOpsConnector[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

export interface AzureDevOpsConnectorProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  authorization?: AuthorizationInfo;
  /** Gets or sets org onboarding information. */
  orgs?: AzureDevOpsOrgMetadata[];
}

export interface AuthorizationInfo {
  /**
   * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
   *
   * Only used during PUT operations. The secret is cleared during GET.
   * In general, RPaaS does not return any property marked as a secret.
   */
  code?: string;
}

/** Org onboarding info. */
export interface AzureDevOpsOrgMetadata {
  /** Gets or sets name of the AzureDevOps Org. */
  name?: string;
  autoDiscovery?: AutoDiscovery;
  projects?: AzureDevOpsProjectMetadata[];
}

/** Project onboarding info. */
export interface AzureDevOpsProjectMetadata {
  /** Gets or sets name of the AzureDevOps Project. */
  name?: string;
  autoDiscovery?: AutoDiscovery;
  /** Gets or sets repositories. */
  repos?: string[];
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

export interface AzureDevOpsRepoListResponse {
  /** Gets or sets list of resources. */
  value?: AzureDevOpsRepo[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

/** AzureDevOps Repo properties. */
export interface AzureDevOpsRepoProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /**
   * Gets or sets AzureDevOps org Name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly orgName?: string;
  /**
   * Gets or sets AzureDevOps project Name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly projectName?: string;
  /**
   * Gets or sets Azure DevOps repo id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly repoId?: string;
  /**
   * Gets or sets AzureDevOps repo url.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly repoUrl?: string;
  /**
   * Gets or sets AzureDevOps repo visibility, whether it is public or private etc.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly visibility?: string;
  actionableRemediation?: ActionableRemediation;
}

export interface ActionableRemediation {
  /**
   * ActionableRemediation Setting.
   * None - the setting was never set.
   * Enabled - ActionableRemediation is enabled.
   * Disabled - ActionableRemediation is disabled.
   */
  state?: ActionableRemediationState;
  severityLevels?: string[];
  categories?: RuleCategory[];
  /** Branch onboarding info. */
  branchConfiguration?: TargetBranchConfiguration;
}

/** Branch onboarding info. */
export interface TargetBranchConfiguration {
  /**
   * Gets or sets branches that should have annotations.
   *
   * For Ignite, we will be supporting a single default branch configuration in the UX.
   */
  names?: string[];
}

export interface AzureDevOpsConnectorStatsListResponse {
  /** Gets or sets list of resources. */
  value?: AzureDevOpsConnectorStats[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

export interface AzureDevOpsConnectorStatsProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets orgs count. */
  orgsCount?: number;
  /** Gets or sets projects count. */
  projectsCount?: number;
  /** Gets or sets repos count. */
  reposCount?: number;
}

export interface AzureDevOpsOrgListResponse {
  /** Gets or sets list of resources. */
  value?: AzureDevOpsOrg[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

/** AzureDevOps Org properties. */
export interface AzureDevOpsOrgProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  autoDiscovery?: AutoDiscovery;
}

export interface AzureDevOpsProjectListResponse {
  /** Gets or sets list of resources. */
  value?: AzureDevOpsProject[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

/** AzureDevOps Project properties. */
export interface AzureDevOpsProjectProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets AzureDevOps org Name. */
  orgName?: string;
  /** Gets or sets AzureDevOps Project Id. */
  projectId?: string;
  autoDiscovery?: AutoDiscovery;
}

export interface GitHubConnectorListResponse {
  /** Gets or sets list of resources. */
  value?: GitHubConnector[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

/** Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors. */
export interface GitHubConnectorProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /**
   * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
   *
   * Only used during PUT operations. The secret is cleared during GET.
   * In general, RPaaS does not return any property marked as a secret.
   */
  code?: string;
}

export interface GitHubRepoListResponse {
  /** Gets or sets list of resources. */
  value?: GitHubRepo[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

/** GitHub Repo properties. */
export interface GitHubRepoProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets gitHub repo account id. */
  accountId?: number;
  /** Gets or sets gitHub repo url. */
  repoUrl?: string;
  /** Gets or sets GitHub Owner Name. */
  ownerName?: string;
}

export interface GitHubConnectorStatsListResponse {
  /** Gets or sets list of resources. */
  value?: GitHubConnectorStats[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

export interface GitHubConnectorStatsProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets owners count. */
  ownersCount?: number;
  /** Gets or sets repos count. */
  reposCount?: number;
}

export interface GitHubOwnerListResponse {
  /** Gets or sets list of resources. */
  value?: GitHubOwner[];
  /** Gets or sets next link to scroll over the results. */
  nextLink?: string;
}

/** GitHub Repo Owner properties. */
export interface GitHubOwnerProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets gitHub owner url. */
  ownerUrl?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

export interface GitHubReposProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets gitHub repo account id. */
  accountId?: number;
  /** Gets or sets gitHub repo name. */
  repoName?: string;
  /** Gets or sets gitHub repo url. */
  repoUrl?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export interface AzureDevOpsConnector extends TrackedResource {
  properties?: AzureDevOpsConnectorProperties;
}

/** Represents an ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors. */
export interface GitHubConnector extends TrackedResource {
  /** Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors. */
  properties?: GitHubConnectorProperties;
}

/** Azure DevOps Repo Proxy Resource. */
export interface AzureDevOpsRepo extends ProxyResource {
  /** AzureDevOps Repo properties. */
  properties?: AzureDevOpsRepoProperties;
}

export interface AzureDevOpsConnectorStats extends ProxyResource {
  properties?: AzureDevOpsConnectorStatsProperties;
}

/** Azure DevOps Org Proxy Resource. */
export interface AzureDevOpsOrg extends ProxyResource {
  /** AzureDevOps Org properties. */
  properties?: AzureDevOpsOrgProperties;
}

/** Azure DevOps Project Proxy Resource. */
export interface AzureDevOpsProject extends ProxyResource {
  /** AzureDevOps Project properties. */
  properties?: AzureDevOpsProjectProperties;
}

/** GitHub repo Proxy Resource. */
export interface GitHubRepo extends ProxyResource {
  /** GitHub Repo properties. */
  properties?: GitHubRepoProperties;
}

export interface GitHubConnectorStats extends ProxyResource {
  properties?: GitHubConnectorStatsProperties;
}

/** GitHub repo owner Proxy Resource. */
export interface GitHubOwner extends ProxyResource {
  /** GitHub Repo Owner properties. */
  properties?: GitHubOwnerProperties;
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ProvisioningState = string;

/** Known values of {@link AutoDiscovery} that the service accepts. */
export enum KnownAutoDiscovery {
  /** Disabled */
  Disabled = "Disabled",
  /** Enabled */
  Enabled = "Enabled"
}

/**
 * Defines values for AutoDiscovery. \
 * {@link KnownAutoDiscovery} can be used interchangeably with AutoDiscovery,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export type AutoDiscovery = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link ActionableRemediationState} that the service accepts. */
export enum KnownActionableRemediationState {
  /** None */
  None = "None",
  /** Disabled */
  Disabled = "Disabled",
  /** Enabled */
  Enabled = "Enabled"
}

/**
 * Defines values for ActionableRemediationState. \
 * {@link KnownActionableRemediationState} can be used interchangeably with ActionableRemediationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Disabled** \
 * **Enabled**
 */
export type ActionableRemediationState = string;

/** Known values of {@link RuleCategory} that the service accepts. */
export enum KnownRuleCategory {
  /** Code */
  Code = "Code",
  /** Artifacts */
  Artifacts = "Artifacts",
  /** Dependencies */
  Dependencies = "Dependencies",
  /** Secrets */
  Secrets = "Secrets",
  /** IaC */
  IaC = "IaC",
  /** Containers */
  Containers = "Containers"
}

/**
 * Defines values for RuleCategory. \
 * {@link KnownRuleCategory} can be used interchangeably with RuleCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Code** \
 * **Artifacts** \
 * **Dependencies** \
 * **Secrets** \
 * **IaC** \
 * **Containers**
 */
export type RuleCategory = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Optional parameters. */
export interface AzureDevOpsConnectorListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AzureDevOpsConnectorListByResourceGroupResponse = AzureDevOpsConnectorListResponse;

/** Optional parameters. */
export interface AzureDevOpsConnectorGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureDevOpsConnectorGetResponse = AzureDevOpsConnector;

/** Optional parameters. */
export interface AzureDevOpsConnectorCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AzureDevOpsConnectorCreateOrUpdateResponse = AzureDevOpsConnector;

/** Optional parameters. */
export interface AzureDevOpsConnectorUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Connector resource payload. */
  azureDevOpsConnector?: AzureDevOpsConnector;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AzureDevOpsConnectorUpdateResponse = AzureDevOpsConnector;

/** Optional parameters. */
export interface AzureDevOpsConnectorDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface AzureDevOpsConnectorListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type AzureDevOpsConnectorListBySubscriptionResponse = AzureDevOpsConnectorListResponse;

/** Optional parameters. */
export interface AzureDevOpsConnectorListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type AzureDevOpsConnectorListByResourceGroupNextResponse = AzureDevOpsConnectorListResponse;

/** Optional parameters. */
export interface AzureDevOpsConnectorListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type AzureDevOpsConnectorListBySubscriptionNextResponse = AzureDevOpsConnectorListResponse;

/** Optional parameters. */
export interface AzureDevOpsRepoListByConnectorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConnector operation. */
export type AzureDevOpsRepoListByConnectorResponse = AzureDevOpsRepoListResponse;

/** Optional parameters. */
export interface AzureDevOpsRepoListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type AzureDevOpsRepoListOperationResponse = AzureDevOpsRepoListResponse;

/** Optional parameters. */
export interface AzureDevOpsRepoGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureDevOpsRepoGetResponse = AzureDevOpsRepo;

/** Optional parameters. */
export interface AzureDevOpsRepoCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AzureDevOpsRepoCreateOrUpdateResponse = AzureDevOpsRepo;

/** Optional parameters. */
export interface AzureDevOpsRepoUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Azure DevOps Repo resource payload. */
  azureDevOpsRepo?: AzureDevOpsRepo;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AzureDevOpsRepoUpdateResponse = AzureDevOpsRepo;

/** Optional parameters. */
export interface AzureDevOpsRepoListByConnectorNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConnectorNext operation. */
export type AzureDevOpsRepoListByConnectorNextResponse = AzureDevOpsRepoListResponse;

/** Optional parameters. */
export interface AzureDevOpsRepoListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type AzureDevOpsRepoListNextResponse = AzureDevOpsRepoListResponse;

/** Optional parameters. */
export interface AzureDevOpsConnectorStatsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureDevOpsConnectorStatsGetResponse = AzureDevOpsConnectorStatsListResponse;

/** Optional parameters. */
export interface AzureDevOpsOrgListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type AzureDevOpsOrgListOperationResponse = AzureDevOpsOrgListResponse;

/** Optional parameters. */
export interface AzureDevOpsOrgGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureDevOpsOrgGetResponse = AzureDevOpsOrg;

/** Optional parameters. */
export interface AzureDevOpsOrgCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AzureDevOpsOrgCreateOrUpdateResponse = AzureDevOpsOrg;

/** Optional parameters. */
export interface AzureDevOpsOrgUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Azure DevOps Org resource payload. */
  azureDevOpsOrg?: AzureDevOpsOrg;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AzureDevOpsOrgUpdateResponse = AzureDevOpsOrg;

/** Optional parameters. */
export interface AzureDevOpsOrgListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type AzureDevOpsOrgListNextResponse = AzureDevOpsOrgListResponse;

/** Optional parameters. */
export interface AzureDevOpsProjectListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type AzureDevOpsProjectListOperationResponse = AzureDevOpsProjectListResponse;

/** Optional parameters. */
export interface AzureDevOpsProjectGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureDevOpsProjectGetResponse = AzureDevOpsProject;

/** Optional parameters. */
export interface AzureDevOpsProjectCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AzureDevOpsProjectCreateOrUpdateResponse = AzureDevOpsProject;

/** Optional parameters. */
export interface AzureDevOpsProjectUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Azure DevOps Project resource payload. */
  azureDevOpsProject?: AzureDevOpsProject;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AzureDevOpsProjectUpdateResponse = AzureDevOpsProject;

/** Optional parameters. */
export interface AzureDevOpsProjectListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type AzureDevOpsProjectListNextResponse = AzureDevOpsProjectListResponse;

/** Optional parameters. */
export interface GitHubConnectorListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type GitHubConnectorListByResourceGroupResponse = GitHubConnectorListResponse;

/** Optional parameters. */
export interface GitHubConnectorGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GitHubConnectorGetResponse = GitHubConnector;

/** Optional parameters. */
export interface GitHubConnectorCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type GitHubConnectorCreateOrUpdateResponse = GitHubConnector;

/** Optional parameters. */
export interface GitHubConnectorUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Connector resource payload. */
  gitHubConnector?: GitHubConnector;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type GitHubConnectorUpdateResponse = GitHubConnector;

/** Optional parameters. */
export interface GitHubConnectorDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface GitHubConnectorListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type GitHubConnectorListBySubscriptionResponse = GitHubConnectorListResponse;

/** Optional parameters. */
export interface GitHubConnectorListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type GitHubConnectorListByResourceGroupNextResponse = GitHubConnectorListResponse;

/** Optional parameters. */
export interface GitHubConnectorListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type GitHubConnectorListBySubscriptionNextResponse = GitHubConnectorListResponse;

/** Optional parameters. */
export interface GitHubRepoListByConnectorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConnector operation. */
export type GitHubRepoListByConnectorResponse = GitHubRepoListResponse;

/** Optional parameters. */
export interface GitHubRepoListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GitHubRepoListOperationResponse = GitHubRepoListResponse;

/** Optional parameters. */
export interface GitHubRepoGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GitHubRepoGetResponse = GitHubRepo;

/** Optional parameters. */
export interface GitHubRepoCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type GitHubRepoCreateOrUpdateResponse = GitHubRepo;

/** Optional parameters. */
export interface GitHubRepoUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Github repo. */
  gitHubRepo?: GitHubRepo;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type GitHubRepoUpdateResponse = GitHubRepo;

/** Optional parameters. */
export interface GitHubRepoListByConnectorNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConnectorNext operation. */
export type GitHubRepoListByConnectorNextResponse = GitHubRepoListResponse;

/** Optional parameters. */
export interface GitHubRepoListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type GitHubRepoListNextResponse = GitHubRepoListResponse;

/** Optional parameters. */
export interface GitHubConnectorStatsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GitHubConnectorStatsGetResponse = GitHubConnectorStatsListResponse;

/** Optional parameters. */
export interface GitHubOwnerListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GitHubOwnerListOperationResponse = GitHubOwnerListResponse;

/** Optional parameters. */
export interface GitHubOwnerGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GitHubOwnerGetResponse = GitHubOwner;

/** Optional parameters. */
export interface GitHubOwnerCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type GitHubOwnerCreateOrUpdateResponse = GitHubOwner;

/** Optional parameters. */
export interface GitHubOwnerUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Github owner. */
  gitHubOwner?: GitHubOwner;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type GitHubOwnerUpdateResponse = GitHubOwner;

/** Optional parameters. */
export interface GitHubOwnerListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type GitHubOwnerListNextResponse = GitHubOwnerListResponse;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface MicrosoftSecurityDevOpsOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
