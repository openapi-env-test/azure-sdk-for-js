import * as coreClient from "@azure/core-client";

/** Result of the request to list REST API operations. It contains a list of operations. */
export interface OperationList {
  /** List of operations supported by the resource provider. */
  value?: Operation[];
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** REST API operation supported by resource provider. */
export interface Operation {
  /** Name of the operation with format: {provider}/{resource}/{operation} */
  name?: string;
  /** If the operation is a data action. (for data plane rbac) */
  isDataAction?: boolean;
  /** The object that describes the operation. */
  display?: OperationDisplay;
  /** Optional. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. */
  origin?: string;
  /** Extra properties for the operation. */
  properties?: OperationProperties;
}

/** The object that describes a operation. */
export interface OperationDisplay {
  /** Friendly name of the resource provider */
  provider?: string;
  /** Resource type on which the operation is performed. */
  resource?: string;
  /** The localized friendly name for the operation. */
  operation?: string;
  /** The localized friendly description for the operation */
  description?: string;
}

/** Extra Operation properties. */
export interface OperationProperties {
  /** The service specifications. */
  serviceSpecification?: ServiceSpecification;
}

/** An object that describes a specification. */
export interface ServiceSpecification {
  /** Specifications of the Metrics for Azure Monitoring. */
  metricSpecifications?: MetricSpecification[];
  /** Specifications of the Logs for Azure Monitoring. */
  logSpecifications?: LogSpecification[];
}

/** Specifications of the Metrics for Azure Monitoring. */
export interface MetricSpecification {
  /** Name of the metric. */
  name?: string;
  /** Localized friendly display name of the metric. */
  displayName?: string;
  /** Localized friendly description of the metric. */
  displayDescription?: string;
  /** The unit that makes sense for the metric. */
  unit?: string;
  /** Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
  aggregationType?: string;
  /**
   * Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published.
   * Ex. a metric that returns the number of times a particular error code was emitted. The error code may not appear
   * often, instead of the RP publishing 0, Shoebox can auto fill in 0s for time periods where nothing was emitted.
   */
  fillGapWithZero?: string;
  /** The name of the metric category that the metric belongs to. A metric can only belong to a single category. */
  category?: string;
  /** The dimensions of the metrics. */
  dimensions?: Dimension[];
}

/** Specifications of the Dimension of metrics. */
export interface Dimension {
  /** The public facing name of the dimension. */
  name?: string;
  /** Localized friendly display name of the dimension. */
  displayName?: string;
  /** Name of the dimension as it appears in MDM. */
  internalName?: string;
  /** A Boolean flag indicating whether this dimension should be included for the shoebox export scenario. */
  toBeExportedForShoebox?: boolean;
}

/** Specifications of the Logs for Azure Monitoring. */
export interface LogSpecification {
  /** Name of the log. */
  name?: string;
  /** Localized friendly display name of the log. */
  displayName?: string;
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

/** Data POST-ed to the nameAvailability action */
export interface NameAvailabilityParameters {
  /** The resource type. Can be "Microsoft.SignalRService/SignalR" or "Microsoft.SignalRService/webPubSub" */
  type: string;
  /** The resource name to validate. e.g."my-resource-name" */
  name: string;
}

/** Result of the request to check name availability. It contains a flag and possible reason of failure. */
export interface NameAvailability {
  /** Indicates whether the name is available or not. */
  nameAvailable?: boolean;
  /** The reason of the availability. Required if name is not available. */
  reason?: string;
  /** The message of the operation. */
  message?: string;
}

/** Object that includes an array of the resource usages and a possible link for next set. */
export interface SignalRServiceUsageList {
  /** List of the resource usages */
  value?: SignalRServiceUsage[];
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Object that describes a specific usage of the resources. */
export interface SignalRServiceUsage {
  /** Fully qualified ARM resource id */
  id?: string;
  /** Current value for the usage quota. */
  currentValue?: number;
  /** The maximum permitted value for the usage quota. If there is no limit, this value will be -1. */
  limit?: number;
  /** Localizable String object containing the name and a localized value. */
  name?: SignalRServiceUsageName;
  /** Representing the units of the usage quota. Possible values are: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond. */
  unit?: string;
}

/** Localizable String object containing the name and a localized value. */
export interface SignalRServiceUsageName {
  /** The identifier of the usage. */
  value?: string;
  /** Localized name of the usage. */
  localizedValue?: string;
}

/** Object that includes an array of resources and a possible link for next set. */
export interface WebPubSubResourceList {
  /** List of the resources */
  value?: WebPubSubResource[];
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** The core properties of ARM resources. */
export interface Resource {
  /**
   * Fully qualified resource Id for the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The billing information of the resource. */
export interface ResourceSku {
  /**
   * The name of the SKU. Required.
   *
   * Allowed values: Standard_S1, Free_F1
   */
  name: string;
  /**
   * Optional tier of this particular SKU. 'Standard' or 'Free'.
   *
   * `Basic` is deprecated, use `Standard` instead.
   */
  tier?: WebPubSubSkuTier;
  /**
   * Not used. Retained for future use.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly size?: string;
  /**
   * Not used. Retained for future use.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly family?: string;
  /**
   * Optional, integer. The unit count of the resource. 1 by default.
   *
   * If present, following values are allowed:
   *     Free: 1
   *     Standard: 1,2,5,10,20,50,100
   */
  capacity?: number;
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

/** Private endpoint */
export interface PrivateEndpoint {
  /** Full qualified Id of the private endpoint */
  id?: string;
}

/** Connection state of the private endpoint connection */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateLinkServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** TLS settings for the resource */
export interface WebPubSubTlsSettings {
  /** Request client certificate during TLS handshake if enabled */
  clientCertEnabled?: boolean;
}

/** Diagnostic configuration of a Microsoft.SignalRService resource. Used together with Azure monitor DiagnosticSettings. */
export interface DiagnosticConfiguration {
  /**
   * Indicate whether or not enable Connectivity logs.
   * Available values: Enabled, Disabled.
   * Case insensitive.
   */
  enableConnectivityLogs?: string;
  /**
   * Indicate whether or not enable Messaging logs.
   * Available values: Enabled, Disabled.
   * Case insensitive.
   */
  enableMessagingLogs?: string;
  /**
   * Indicate whether or not enable Live Trace.
   * Available values: Enabled, Disabled.
   * Case insensitive.
   * Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues.
   */
  enableLiveTrace?: string;
}

/** The settings for event handler in webpubsub service */
export interface EventHandlerSettings {
  /** Get or set the EventHandler items. The key is the hub name and the value is the corresponding EventHandlerTemplate. */
  items?: { [propertyName: string]: EventHandlerTemplate[] };
}

/** EventHandler template item settings. */
export interface EventHandlerTemplate {
  /**
   * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.
   * For example, UrlTemplate can be `http://example.com/api/{hub}/{event}`. The host part can't contains parameters.
   */
  urlTemplate: string;
  /**
   * Gets or sets the matching pattern for event names.
   * There are 3 kind of patterns supported:
   *     1. "*", it to matches any event name
   *     2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"
   *     3. The single event name, for example, "event1", it matches "event1"
   */
  userEventPattern?: string;
  /**
   * Gets ot sets the system event pattern.
   * There are 2 kind of patterns supported:
   *     1. The single event name, for example, "connect", it matches "connect"
   *     2. Combine multiple events with ",", for example "connect,disconnected", it matches event "connect" and "disconnected"
   */
  systemEventPattern?: string;
  /** Gets or sets the auth settings for an event handler. If not set, no auth is used. */
  auth?: UpstreamAuthSettings;
}

/** Upstream auth settings. */
export interface UpstreamAuthSettings {
  /** Gets or sets the type of auth. None or ManagedIdentity is supported now. */
  type?: UpstreamAuthType;
  /** Gets or sets the managed identity settings. It's required if the auth type is set to ManagedIdentity. */
  managedIdentity?: ManagedIdentitySettings;
}

/** Managed identity settings for upstream. */
export interface ManagedIdentitySettings {
  /**
   * The Resource indicating the App ID URI of the target resource.
   * It also appears in the aud (audience) claim of the issued token.
   */
  resource?: string;
}

/** Network ACLs for the resource */
export interface WebPubSubNetworkACLs {
  /** Default action when no other rule matches */
  defaultAction?: ACLAction;
  /** ACL for requests from public network */
  publicNetwork?: NetworkACL;
  /** ACLs for requests from private endpoints */
  privateEndpoints?: PrivateEndpointACL[];
}

/** Network ACL */
export interface NetworkACL {
  /** Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI. */
  allow?: WebPubSubRequestType[];
  /** Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI. */
  deny?: WebPubSubRequestType[];
}

/** A class represent managed identities used for request and response */
export interface ManagedIdentity {
  /** Represent the identity type: systemAssigned, userAssigned, None */
  type?: ManagedIdentityType;
  /** Get or set the user assigned identities */
  userAssignedIdentities?: {
    [propertyName: string]: UserAssignedIdentityProperty;
  };
  /**
   * Get the principal id for the system assigned identity.
   * Only be used in response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * Get the tenant id for the system assigned identity.
   * Only be used in response
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
}

/** Properties of user assigned identity. */
export interface UserAssignedIdentityProperty {
  /**
   * Get the principal id for the user assigned identity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * Get the client id for the user assigned identity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** A class represents the access keys of the resource. */
export interface WebPubSubKeys {
  /** The primary access key. */
  primaryKey?: string;
  /** The secondary access key. */
  secondaryKey?: string;
  /** Connection string constructed via the primaryKey */
  primaryConnectionString?: string;
  /** Connection string constructed via the secondaryKey */
  secondaryConnectionString?: string;
}

/** A list of private endpoint connections */
export interface PrivateEndpointConnectionList {
  /** The list of the private endpoint connections */
  value?: PrivateEndpointConnection[];
  /** Request URL that can be used to query next page of private endpoint connections. Returned when the total number of requested private endpoint connections exceed maximum page size. */
  nextLink?: string;
}

/** Contains a list of PrivateLinkResource and a possible link to query more results */
export interface PrivateLinkResourceList {
  /** List of PrivateLinkResource */
  value?: PrivateLinkResource[];
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Describes a  resource type that has been onboarded to private link service */
export interface ShareablePrivateLinkResourceType {
  /** The name of the resource type that has been onboarded to private link service */
  name?: string;
  /** Describes the properties of a resource type that has been onboarded to private link service */
  properties?: ShareablePrivateLinkResourceProperties;
}

/** Describes the properties of a resource type that has been onboarded to private link service */
export interface ShareablePrivateLinkResourceProperties {
  /** The description of the resource type that has been onboarded to private link service */
  description?: string;
  /** The resource provider group id for the resource that has been onboarded to private link service */
  groupId?: string;
  /** The resource provider type for the resource that has been onboarded to private link service */
  type?: string;
}

/** Parameters describes the request to regenerate access keys */
export interface RegenerateKeyParameters {
  /** The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive). */
  keyType?: KeyType;
}

/** A list of shared private link resources */
export interface SharedPrivateLinkResourceList {
  /** The list of the shared private link resources */
  value?: SharedPrivateLinkResource[];
  /** Request URL that can be used to query next page of private endpoint connections. Returned when the total number of requested private endpoint connections exceed maximum page size. */
  nextLink?: string;
}

/** The resource model definition for a ARM tracked top level resource. */
export type TrackedResource = Resource & {
  /** The GEO location of the resource. e.g. West US | East US | North Central US | South Central US. */
  location?: string;
  /** Tags of the service which is a list of key value pairs that describe the resource. */
  tags?: { [propertyName: string]: string };
};

/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
export type ProxyResource = Resource & {};

/** ACL for a private endpoint */
export type PrivateEndpointACL = NetworkACL & {
  /** Name of the private endpoint connection */
  name: string;
};

/** A class represent a resource. */
export type WebPubSubResource = TrackedResource & {
  /** The billing information of the resource.(e.g. Free, Standard) */
  sku?: ResourceSku;
  /** The managed identity response */
  identity?: ManagedIdentity;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /**
   * Provisioning state of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The publicly accessible IP of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly externalIP?: string;
  /**
   * FQDN of the service instance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hostName?: string;
  /**
   * The publicly accessible port of the resource which is designed for browser/client side usage.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly publicPort?: number;
  /**
   * The publicly accessible port of the resource which is designed for customer server side usage.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serverPort?: number;
  /**
   * Version of the resource. Probably you need the same or higher version of client SDKs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * Private endpoint connections to the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * The list of shared private link resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
  /** TLS settings. */
  tls?: WebPubSubTlsSettings;
  /** Diagnostic configuration of a Microsoft.SignalRService resource. Used together with Azure monitor DiagnosticSettings. */
  diagnosticConfiguration?: DiagnosticConfiguration;
  /** The settings for event handler in webpubsub service. */
  eventHandler?: EventHandlerSettings;
  /** Network ACLs */
  networkACLs?: WebPubSubNetworkACLs;
  /**
   * Enable or disable public network access. Default to "Enabled".
   * When it's Enabled, network ACLs still apply.
   * When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
   */
  publicNetworkAccess?: string;
  /**
   * DisableLocalAuth
   * Enable or disable local auth with AccessKey
   * When set as true, connection with AccessKey=xxx won't work.
   */
  disableLocalAuth?: boolean;
  /**
   * DisableLocalAuth
   * Enable or disable aad auth
   * When set as true, connection with AuthType=aad won't work.
   */
  disableAadAuth?: boolean;
};

/** A private endpoint connection to an azure resource */
export type PrivateEndpointConnection = ProxyResource & {
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /**
   * Provisioning state of the private endpoint connection
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Private endpoint associated with the private endpoint connection */
  privateEndpoint?: PrivateEndpoint;
  /** Connection state */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
};

/** Describes a Shared Private Link Resource */
export type SharedPrivateLinkResource = ProxyResource & {
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The group id from the provider of resource the shared private link resource is for */
  groupId?: string;
  /** The resource id of the resource the shared private link resource is for */
  privateLinkResourceId?: string;
  /**
   * Provisioning state of the shared private link resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The request message for requesting approval of the shared private link resource */
  requestMessage?: string;
  /**
   * Status of the shared private link resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: SharedPrivateLinkResourceStatus;
};

/** Private link resource */
export type PrivateLinkResource = ProxyResource & {
  /** Group Id of the private link resource */
  groupId?: string;
  /** Required members of the private link resource */
  requiredMembers?: string[];
  /** Required private DNS zone names */
  requiredZoneNames?: string[];
  /** The list of resources that are onboarded to private link service */
  shareablePrivateLinkResourceTypes?: ShareablePrivateLinkResourceType[];
};

/** Known values of {@link WebPubSubSkuTier} that the service accepts. */
export const enum KnownWebPubSubSkuTier {
  Free = "Free",
  Basic = "Basic",
  Standard = "Standard",
  Premium = "Premium"
}

/**
 * Defines values for WebPubSubSkuTier. \
 * {@link KnownWebPubSubSkuTier} can be used interchangeably with WebPubSubSkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Free** \
 * **Basic** \
 * **Standard** \
 * **Premium**
 */
export type WebPubSubSkuTier = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export const enum KnownProvisioningState {
  Unknown = "Unknown",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Running = "Running",
  Creating = "Creating",
  Updating = "Updating",
  Deleting = "Deleting",
  Moving = "Moving"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Running** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Moving**
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export const enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
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

/** Known values of {@link PrivateLinkServiceConnectionStatus} that the service accepts. */
export const enum KnownPrivateLinkServiceConnectionStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Disconnected = "Disconnected"
}

/**
 * Defines values for PrivateLinkServiceConnectionStatus. \
 * {@link KnownPrivateLinkServiceConnectionStatus} can be used interchangeably with PrivateLinkServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export type PrivateLinkServiceConnectionStatus = string;

/** Known values of {@link SharedPrivateLinkResourceStatus} that the service accepts. */
export const enum KnownSharedPrivateLinkResourceStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Disconnected = "Disconnected",
  Timeout = "Timeout"
}

/**
 * Defines values for SharedPrivateLinkResourceStatus. \
 * {@link KnownSharedPrivateLinkResourceStatus} can be used interchangeably with SharedPrivateLinkResourceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected** \
 * **Timeout**
 */
export type SharedPrivateLinkResourceStatus = string;

/** Known values of {@link UpstreamAuthType} that the service accepts. */
export const enum KnownUpstreamAuthType {
  None = "None",
  ManagedIdentity = "ManagedIdentity"
}

/**
 * Defines values for UpstreamAuthType. \
 * {@link KnownUpstreamAuthType} can be used interchangeably with UpstreamAuthType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **ManagedIdentity**
 */
export type UpstreamAuthType = string;

/** Known values of {@link ACLAction} that the service accepts. */
export const enum KnownACLAction {
  Allow = "Allow",
  Deny = "Deny"
}

/**
 * Defines values for ACLAction. \
 * {@link KnownACLAction} can be used interchangeably with ACLAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export type ACLAction = string;

/** Known values of {@link WebPubSubRequestType} that the service accepts. */
export const enum KnownWebPubSubRequestType {
  ClientConnection = "ClientConnection",
  ServerConnection = "ServerConnection",
  Restapi = "RESTAPI",
  Trace = "Trace"
}

/**
 * Defines values for WebPubSubRequestType. \
 * {@link KnownWebPubSubRequestType} can be used interchangeably with WebPubSubRequestType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ClientConnection** \
 * **ServerConnection** \
 * **RESTAPI** \
 * **Trace**
 */
export type WebPubSubRequestType = string;

/** Known values of {@link ManagedIdentityType} that the service accepts. */
export const enum KnownManagedIdentityType {
  None = "None",
  SystemAssigned = "SystemAssigned",
  UserAssigned = "UserAssigned"
}

/**
 * Defines values for ManagedIdentityType. \
 * {@link KnownManagedIdentityType} can be used interchangeably with ManagedIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned**
 */
export type ManagedIdentityType = string;

/** Known values of {@link KeyType} that the service accepts. */
export const enum KnownKeyType {
  Primary = "Primary",
  Secondary = "Secondary"
}

/**
 * Defines values for KeyType. \
 * {@link KnownKeyType} can be used interchangeably with KeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Secondary**
 */
export type KeyType = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationList;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationList;

/** Optional parameters. */
export interface WebPubSubCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type WebPubSubCheckNameAvailabilityResponse = NameAvailability;

/** Optional parameters. */
export interface WebPubSubListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type WebPubSubListBySubscriptionResponse = WebPubSubResourceList;

/** Optional parameters. */
export interface WebPubSubListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type WebPubSubListByResourceGroupResponse = WebPubSubResourceList;

/** Optional parameters. */
export interface WebPubSubGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WebPubSubGetResponse = WebPubSubResource;

/** Optional parameters. */
export interface WebPubSubCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type WebPubSubCreateOrUpdateResponse = WebPubSubResource;

/** Optional parameters. */
export interface WebPubSubDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface WebPubSubUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type WebPubSubUpdateResponse = WebPubSubResource;

/** Optional parameters. */
export interface WebPubSubListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type WebPubSubListKeysResponse = WebPubSubKeys;

/** Optional parameters. */
export interface WebPubSubRegenerateKeyOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the regenerateKey operation. */
export type WebPubSubRegenerateKeyResponse = WebPubSubKeys;

/** Optional parameters. */
export interface WebPubSubRestartOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface WebPubSubListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type WebPubSubListBySubscriptionNextResponse = WebPubSubResourceList;

/** Optional parameters. */
export interface WebPubSubListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type WebPubSubListByResourceGroupNextResponse = WebPubSubResourceList;

/** Optional parameters. */
export interface UsagesListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type UsagesListResponse = SignalRServiceUsageList;

/** Optional parameters. */
export interface UsagesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type UsagesListNextResponse = SignalRServiceUsageList;

/** Optional parameters. */
export interface WebPubSubPrivateEndpointConnectionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type WebPubSubPrivateEndpointConnectionsListResponse = PrivateEndpointConnectionList;

/** Optional parameters. */
export interface WebPubSubPrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WebPubSubPrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface WebPubSubPrivateEndpointConnectionsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type WebPubSubPrivateEndpointConnectionsUpdateResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface WebPubSubPrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface WebPubSubPrivateEndpointConnectionsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type WebPubSubPrivateEndpointConnectionsListNextResponse = PrivateEndpointConnectionList;

/** Optional parameters. */
export interface WebPubSubPrivateLinkResourcesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type WebPubSubPrivateLinkResourcesListResponse = PrivateLinkResourceList;

/** Optional parameters. */
export interface WebPubSubPrivateLinkResourcesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type WebPubSubPrivateLinkResourcesListNextResponse = PrivateLinkResourceList;

/** Optional parameters. */
export interface WebPubSubSharedPrivateLinkResourcesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type WebPubSubSharedPrivateLinkResourcesListResponse = SharedPrivateLinkResourceList;

/** Optional parameters. */
export interface WebPubSubSharedPrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WebPubSubSharedPrivateLinkResourcesGetResponse = SharedPrivateLinkResource;

/** Optional parameters. */
export interface WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse = SharedPrivateLinkResource;

/** Optional parameters. */
export interface WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface WebPubSubSharedPrivateLinkResourcesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type WebPubSubSharedPrivateLinkResourcesListNextResponse = SharedPrivateLinkResourceList;

/** Optional parameters. */
export interface WebPubSubManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
