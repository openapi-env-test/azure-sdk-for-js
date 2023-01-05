/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Network Rule Set Properties of this IoT Central application. */
export interface NetworkRuleSets {
  /** Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application. */
  applyToDevices?: boolean;
  /** Whether these rules apply for connectivity via IoT Central web portal and APIs. */
  applyToIoTCentral?: boolean;
  /** The default network action to apply. */
  defaultAction?: NetworkAction;
  /** List of IP rules. */
  ipRules?: NetworkRuleSetIpRule[];
}

/** An object for an IP range that will be allowed access. */
export interface NetworkRuleSetIpRule {
  /**
   * The network action for the IP mask.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly action?: IpRuleAction;
  /** The readable name of the IP rule. */
  filterName?: string;
  /** The CIDR block defining the IP range. */
  ipMask?: string;
}

/** The private endpoint resource. */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for private endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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

/** Information about the SKU of the IoT Central application. */
export interface AppSkuInfo {
  /** The name of the SKU. */
  name: AppSku;
}

/** Managed service identity (either system assigned, or none) */
export interface SystemAssignedServiceIdentity {
  /**
   * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of managed service identity (either system assigned, or none). */
  type: SystemAssignedServiceIdentityType;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface ResourceAutoGenerated {
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

/** The description of the IoT Central application. */
export interface AppPatch {
  /** Instance tags */
  tags?: { [propertyName: string]: string };
  /** A valid instance SKU. */
  sku?: AppSkuInfo;
  /** The managed identities for the IoT Central application. */
  identity?: SystemAssignedServiceIdentity;
  /**
   * The provisioning state of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The ID of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly applicationId?: string;
  /** The display name of the application. */
  displayName?: string;
  /** The subdomain of the application. */
  subdomain?: string;
  /** The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. */
  template?: string;
  /**
   * The current state of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: AppState;
  /** Whether requests from the public network are allowed. */
  publicNetworkAccess?: PublicNetworkAccess;
  /** Network Rule Set Properties of this IoT Central application. */
  networkRuleSets?: NetworkRuleSets;
  /**
   * Private endpoint connections created on this IoT Central application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
}

/** A list of IoT Central Applications with a next link. */
export interface AppListResult {
  /** The link used to get the next page of IoT Central Applications. */
  nextLink?: string;
  /** A list of IoT Central Applications. */
  value?: App[];
}

/** List of private endpoint connections associated with the specified resource. */
export interface PrivateEndpointConnectionListResult {
  /** Array of private endpoint connections. */
  value?: PrivateEndpointConnection[];
}

/** A list of private link resources. */
export interface PrivateLinkResourceListResult {
  /** Array of private link resources */
  value?: PrivateLinkResource[];
}

/** Input values. */
export interface OperationInputs {
  /** The name of the IoT Central application instance to check. */
  name: string;
  /** The type of the IoT Central resource to query. */
  type?: string;
}

/** The properties indicating whether a given IoT Central application name or subdomain is available. */
export interface AppAvailabilityInfo {
  /**
   * The value which indicates whether the provided name is available.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason for unavailability.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reason?: string;
  /**
   * The detailed reason message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** A list of IoT Central Application Templates with a next link. */
export interface AppTemplatesResult {
  /** The link used to get the next page of IoT Central application templates. */
  nextLink?: string;
  /**
   * A list of IoT Central Application Templates.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: AppTemplate[];
}

/** IoT Central Application Template. */
export interface AppTemplate {
  /**
   * The ID of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly manifestId?: string;
  /**
   * The version of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly manifestVersion?: string;
  /**
   * The name of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The title of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly title?: string;
  /**
   * The order of the template in the templates list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly order?: number;
  /**
   * The description of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * The industry of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly industry?: string;
  /**
   * A list of locations that support the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly locations?: AppTemplateLocations[];
}

/** IoT Central Application Template Locations. */
export interface AppTemplateLocations {
  /**
   * The ID of the location.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The display name of the location.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly displayName?: string;
}

/** A list of IoT Central operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** The link used to get the next page of IoT Central description objects. */
  nextLink?: string;
  /**
   * A list of operations supported by the Microsoft.IoTCentral resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
}

/** IoT Central REST API operation */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: string;
  /**
   * Additional descriptions for the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: Record<string, unknown>;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft IoT Central
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource Type: IoT Central
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Name of the operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * Friendly description for the operation,
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** The private endpoint connection resource. */
export interface PrivateEndpointConnection extends Resource {
  /**
   * The group ids for the private endpoint resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** A private link resource. */
export interface PrivateLinkResource extends Resource {
  /**
   * The private link resource group id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends ResourceAutoGenerated {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The IoT Central application. */
export interface App extends TrackedResource {
  /** A valid instance SKU. */
  sku: AppSkuInfo;
  /** The managed identities for the IoT Central application. */
  identity?: SystemAssignedServiceIdentity;
  /**
   * The provisioning state of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The ID of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly applicationId?: string;
  /** The display name of the application. */
  displayName?: string;
  /** The subdomain of the application. */
  subdomain?: string;
  /** The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. */
  template?: string;
  /**
   * The current state of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: AppState;
  /** Whether requests from the public network are allowed. */
  publicNetworkAccess?: PublicNetworkAccess;
  /** Network Rule Set Properties of this IoT Central application. */
  networkRuleSets?: NetworkRuleSets;
  /**
   * Private endpoint connections created on this IoT Central application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
}

/** Defines headers for Apps_createOrUpdate operation. */
export interface AppsCreateOrUpdateHeaders {
  /** URL to query for status of the operation. Returns current state, progress, and error metadata for the operation. */
  azureAsyncOperation?: string;
  /** How long the user should wait before making a follow-up request. */
  retryAfter?: string;
}

/** Defines headers for Apps_update operation. */
export interface AppsUpdateHeaders {
  /** URL to query for status of the operation. Returns current state, progress, and error metadata for the operation. */
  azureAsyncOperation?: string;
  /** URL to query for status of the operation. Returns 202 Accepted while the operation is in progress. */
  location?: string;
  /** How long the user should wait before making a follow-up request. */
  retryAfter?: string;
}

/** Defines headers for Apps_delete operation. */
export interface AppsDeleteHeaders {
  /** URL to query for status of the operation. Returns current state, progress, and error metadata for the operation. */
  azureAsyncOperation?: string;
  /** URL to query for status of the operation. Returns 202 Accepted while the operation is in progress. */
  location?: string;
  /** How long the user should wait before making a follow-up request. */
  retryAfter?: string;
}

/** Defines headers for PrivateEndpointConnections_create operation. */
export interface PrivateEndpointConnectionsCreateHeaders {
  /** URL to query for status of the operation. Returns current state, progress, and error metadata for the operation. */
  azureAsyncOperation?: string;
  /** How long the user should wait before making a follow-up request. */
  retryAfter?: string;
}

/** Defines headers for PrivateEndpointConnections_delete operation. */
export interface PrivateEndpointConnectionsDeleteHeaders {
  /** URL to query for status of the operation. Returns current state, progress, and error metadata for the operation. */
  azureAsyncOperation?: string;
  /** URL to query for status of the operation. Returns 202 Accepted while the operation is in progress. */
  location?: string;
  /** How long the user should wait before making a follow-up request. */
  retryAfter?: string;
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Updating */
  Updating = "Updating",
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
 * **Creating** \
 * **Deleting** \
 * **Updating** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ProvisioningState = string;

/** Known values of {@link AppState} that the service accepts. */
export enum KnownAppState {
  /** Created */
  Created = "created",
  /** Suspended */
  Suspended = "suspended"
}

/**
 * Defines values for AppState. \
 * {@link KnownAppState} can be used interchangeably with AppState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **created** \
 * **suspended**
 */
export type AppState = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link NetworkAction} that the service accepts. */
export enum KnownNetworkAction {
  /** Allow */
  Allow = "Allow",
  /** Deny */
  Deny = "Deny"
}

/**
 * Defines values for NetworkAction. \
 * {@link KnownNetworkAction} can be used interchangeably with NetworkAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export type NetworkAction = string;

/** Known values of {@link IpRuleAction} that the service accepts. */
export enum KnownIpRuleAction {
  /** Allow */
  Allow = "Allow"
}

/**
 * Defines values for IpRuleAction. \
 * {@link KnownIpRuleAction} can be used interchangeably with IpRuleAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow**
 */
export type IpRuleAction = string;

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  /** Pending */
  Pending = "Pending",
  /** Approved */
  Approved = "Approved",
  /** Rejected */
  Rejected = "Rejected"
}

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed"
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

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

/** Known values of {@link AppSku} that the service accepts. */
export enum KnownAppSku {
  /** ST0 */
  ST0 = "ST0",
  /** ST1 */
  ST1 = "ST1",
  /** ST2 */
  ST2 = "ST2"
}

/**
 * Defines values for AppSku. \
 * {@link KnownAppSku} can be used interchangeably with AppSku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ST0** \
 * **ST1** \
 * **ST2**
 */
export type AppSku = string;

/** Known values of {@link SystemAssignedServiceIdentityType} that the service accepts. */
export enum KnownSystemAssignedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned"
}

/**
 * Defines values for SystemAssignedServiceIdentityType. \
 * {@link KnownSystemAssignedServiceIdentityType} can be used interchangeably with SystemAssignedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned**
 */
export type SystemAssignedServiceIdentityType = string;

/** Optional parameters. */
export interface AppsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AppsGetResponse = App;

/** Optional parameters. */
export interface AppsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AppsCreateOrUpdateResponse = AppsCreateOrUpdateHeaders & App;

/** Optional parameters. */
export interface AppsUpdateOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AppsUpdateResponse = AppsUpdateHeaders;

/** Optional parameters. */
export interface AppsDeleteOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type AppsDeleteResponse = AppsDeleteHeaders;

/** Optional parameters. */
export interface AppsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type AppsListBySubscriptionResponse = AppListResult;

/** Optional parameters. */
export interface AppsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AppsListByResourceGroupResponse = AppListResult;

/** Optional parameters. */
export interface AppsCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type AppsCheckNameAvailabilityResponse = AppAvailabilityInfo;

/** Optional parameters. */
export interface AppsCheckSubdomainAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkSubdomainAvailability operation. */
export type AppsCheckSubdomainAvailabilityResponse = AppAvailabilityInfo;

/** Optional parameters. */
export interface AppsListTemplatesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listTemplates operation. */
export type AppsListTemplatesResponse = AppTemplatesResult;

/** Optional parameters. */
export interface AppsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type AppsListBySubscriptionNextResponse = AppListResult;

/** Optional parameters. */
export interface AppsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type AppsListByResourceGroupNextResponse = AppListResult;

/** Optional parameters. */
export interface AppsListTemplatesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listTemplatesNext operation. */
export type AppsListTemplatesNextResponse = AppTemplatesResult;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type PrivateEndpointConnectionsCreateResponse = PrivateEndpointConnectionsCreateHeaders &
  PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type PrivateEndpointConnectionsDeleteResponse = PrivateEndpointConnectionsDeleteHeaders;

/** Optional parameters. */
export interface PrivateEndpointConnectionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export interface PrivateLinksGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinksGetResponse = PrivateLinkResource;

/** Optional parameters. */
export interface PrivateLinksListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateLinksListResponse = PrivateLinkResourceListResult;

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
export interface IotCentralClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
