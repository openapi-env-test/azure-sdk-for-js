/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The object that describes a operation.
 */
export interface OperationDisplay {
  /**
   * Friendly name of the resource provider
   */
  provider?: string;
  /**
   * Resource type on which the operation is performed.
   */
  resource?: string;
  /**
   * The localized friendly name for the operation.
   */
  operation?: string;
  /**
   * The localized friendly description for the operation
   */
  description?: string;
}

/**
 * Specifications of the Dimension of metrics.
 */
export interface Dimension {
  /**
   * The public facing name of the dimension.
   */
  name?: string;
  /**
   * Localized friendly display name of the dimension.
   */
  displayName?: string;
  /**
   * Name of the dimension as it appears in MDM.
   */
  internalName?: string;
  /**
   * A Boolean flag indicating whether this dimension should be included for the shoebox export
   * scenario.
   */
  toBeExportedForShoebox?: boolean;
}

/**
 * Specifications of the Metrics for Azure Monitoring.
 */
export interface MetricSpecification {
  /**
   * Name of the metric.
   */
  name?: string;
  /**
   * Localized friendly display name of the metric.
   */
  displayName?: string;
  /**
   * Localized friendly description of the metric.
   */
  displayDescription?: string;
  /**
   * The unit that makes sense for the metric.
   */
  unit?: string;
  /**
   * Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count.
   */
  aggregationType?: string;
  /**
   * Optional. If set to true, then zero will be returned for time duration where no metric is
   * emitted/published.
   * Ex. a metric that returns the number of times a particular error code was emitted. The error
   * code may not appear
   * often, instead of the RP publishing 0, Shoebox can auto fill in 0s for time periods where
   * nothing was emitted.
   */
  fillGapWithZero?: string;
  /**
   * The name of the metric category that the metric belongs to. A metric can only belong to a
   * single category.
   */
  category?: string;
  /**
   * The dimensions of the metrics.
   */
  dimensions?: Dimension[];
}

/**
 * Specifications of the Logs for Azure Monitoring.
 */
export interface LogSpecification {
  /**
   * Name of the log.
   */
  name?: string;
  /**
   * Localized friendly display name of the log.
   */
  displayName?: string;
}

/**
 * An object that describes a specification.
 */
export interface ServiceSpecification {
  /**
   * Specifications of the Metrics for Azure Monitoring.
   */
  metricSpecifications?: MetricSpecification[];
  /**
   * Specifications of the Logs for Azure Monitoring.
   */
  logSpecifications?: LogSpecification[];
}

/**
 * Extra Operation properties.
 */
export interface OperationProperties {
  /**
   * The service specifications.
   */
  serviceSpecification?: ServiceSpecification;
}

/**
 * REST API operation supported by SignalR resource provider.
 */
export interface Operation {
  /**
   * Name of the operation with format: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * If the operation is a data action. (for data plane rbac)
   */
  isDataAction?: boolean;
  /**
   * The object that describes the operation.
   */
  display?: OperationDisplay;
  /**
   * Optional. The intended executor of the operation; governs the display of the operation in the
   * RBAC UX and the audit logs UX.
   */
  origin?: string;
  /**
   * Extra properties for the operation.
   */
  properties?: OperationProperties;
}

/**
 * Describes a particular API error with an error code and a message.
 */
export interface ErrorResponseBody {
  /**
   * An error code that describes the error condition more precisely than an HTTP status code.
   * Can be used to programmatically handle specific error cases.
   */
  code: string;
  /**
   * A message that describes the error in detail and provides debugging information.
   */
  message: string;
  /**
   * The target of the particular error (for example, the name of the property in error).
   */
  target?: string;
  /**
   * Contains nested errors that are related to this error.
   */
  details?: ErrorResponseBody[];
}

/**
 * Contains information about an API error.
 */
export interface ErrorResponse {
  /**
   * Describes a particular API error with an error code and a message.
   */
  error?: ErrorResponseBody;
}

/**
 * Data POST-ed to the nameAvailability action
 */
export interface NameAvailabilityParameters {
  /**
   * The resource type. Should be always "Microsoft.SignalRService/SignalR".
   */
  type: string;
  /**
   * The SignalR service name to validate. e.g."my-signalR-name-here"
   */
  name: string;
}

/**
 * Result of the request to check name availability. It contains a flag and possible reason of
 * failure.
 */
export interface NameAvailability {
  /**
   * Indicates whether the name is available or not.
   */
  nameAvailable?: boolean;
  /**
   * The reason of the availability. Required if name is not available.
   */
  reason?: string;
  /**
   * The message of the operation.
   */
  message?: string;
}

/**
 * The billing information of the SignalR resource.
 */
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
   * `Basic` is deprecated, use `Standard` instead. Possible values include: 'Free', 'Basic',
   * 'Standard', 'Premium'
   */
  tier?: SignalRSkuTier;
  /**
   * Optional string. For future use.
   */
  size?: string;
  /**
   * Optional string. For future use.
   */
  family?: string;
  /**
   * Optional, integer. The unit count of SignalR resource. 1 by default.
   *
   * If present, following values are allowed:
   * Free: 1
   * Standard: 1,2,5,10,20,50,100
   */
  capacity?: number;
}

/**
 * Private endpoint
 */
export interface PrivateEndpoint {
  /**
   * Full qualified Id of the private endpoint
   */
  id?: string;
}

/**
 * Connection state of the private endpoint connection
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the
   * service. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
   */
  status?: PrivateLinkServiceConnectionStatus;
  /**
   * The reason for approval/rejection of the connection.
   */
  description?: string;
  /**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
  actionsRequired?: string;
}

/**
 * The core properties of ARM resources.
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
 */
export interface ProxyResource extends Resource {
}

/**
 * A private endpoint connection to SignalR resource
 */
export interface PrivateEndpointConnection extends ProxyResource {
  /**
   * Provisioning state of the private endpoint connection. Possible values include: 'Unknown',
   * 'Succeeded', 'Failed', 'Canceled', 'Running', 'Creating', 'Updating', 'Deleting', 'Moving'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Private endpoint associated with the private endpoint connection
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * Connection state
   */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
}

/**
 * The resource model definition for a ARM tracked top level resource.
 */
export interface TrackedResource extends Resource {
  /**
   * The GEO location of the SignalR service. e.g. West US | East US | North Central US | South
   * Central US.
   */
  location?: string;
  /**
   * Tags of the service which is a list of key value pairs that describe the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * A class represent a SignalR service resource.
 */
export interface SignalRResource extends TrackedResource {
  /**
   * The billing information of the resource.(e.g. Free, Standard)
   */
  sku?: ResourceSku;
  /**
   * Prefix for the hostName of the SignalR service. Retained for future use.
   * The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
   */
  hostNamePrefix?: string;
  /**
   * List of SignalR featureFlags. e.g. ServiceMode.
   *
   * FeatureFlags that are not included in the parameters for the update operation will not be
   * modified.
   * And the response will only include featureFlags that are explicitly set.
   * When a featureFlag is not explicitly set, SignalR service will use its globally default value.
   * But keep in mind, the default value doesn't mean "false". It varies in terms of different
   * FeatureFlags.
   */
  features?: SignalRFeature[];
  /**
   * Cross-Origin Resource Sharing (CORS) settings.
   */
  cors?: SignalRCorsSettings;
  /**
   * Upstream settings when the Azure SignalR is in server-less mode.
   */
  upstream?: ServerlessUpstreamSettings;
  /**
   * Network ACLs
   */
  networkACLs?: SignalRNetworkACLs;
  /**
   * Provisioning state of the resource. Possible values include: 'Unknown', 'Succeeded', 'Failed',
   * 'Canceled', 'Running', 'Creating', 'Updating', 'Deleting', 'Moving'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The publicly accessible IP of the SignalR service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly externalIP?: string;
  /**
   * FQDN of the SignalR service instance. Format: xxx.service.signalr.net
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hostName?: string;
  /**
   * The publicly accessible port of the SignalR service which is designed for browser/client side
   * usage.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly publicPort?: number;
  /**
   * The publicly accessible port of the SignalR service which is designed for customer server side
   * usage.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serverPort?: number;
  /**
   * Version of the SignalR resource. Probably you need the same or higher version of client SDKs.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly version?: string;
  /**
   * Private endpoint connections to the SignalR resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * The kind of the service - e.g. "SignalR", or "RawWebSockets" for
   * "Microsoft.SignalRService/SignalR". Possible values include: 'SignalR', 'RawWebSockets'
   */
  kind?: ServiceKind;
}

/**
 * Feature of a SignalR resource, which controls the SignalR runtime behavior.
 */
export interface SignalRFeature {
  /**
   * FeatureFlags is the supported features of Azure SignalR service.
   * - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have
   * your own backend server; "Serverless": your application doesn't have a backend server;
   * "Classic": for backward compatibility. Support both Default and Serverless mode but not
   * recommended; "PredefinedOnly": for future use.
   * - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category
   * respectively. Possible values include: 'ServiceMode', 'EnableConnectivityLogs',
   * 'EnableMessagingLogs'
   */
  flag: FeatureFlags;
  /**
   * Value of the feature flag. See Azure SignalR service document
   * https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
   */
  value: string;
  /**
   * Optional properties related to this feature.
   */
  properties?: { [propertyName: string]: string };
}

/**
 * Cross-Origin Resource Sharing (CORS) settings.
 */
export interface SignalRCorsSettings {
  /**
   * Gets or sets the list of origins that should be allowed to make cross-origin calls (for
   * example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
   */
  allowedOrigins?: string[];
}

/**
 * Upstream template item settings. It defines the Upstream URL of the incoming requests.
 * The template defines the pattern of the event, the hub or the category of the incoming request
 * that matches current URL template.
 */
export interface UpstreamTemplate {
  /**
   * Gets or sets the matching pattern for hub names. If not set, it matches any hub.
   * There are 3 kind of patterns supported:
   * 1. "*", it to matches any hub name
   * 2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2"
   * 3. The single hub name, for example, "hub1", it matches "hub1"
   */
  hubPattern?: string;
  /**
   * Gets or sets the matching pattern for event names. If not set, it matches any event.
   * There are 3 kind of patterns supported:
   * 1. "*", it to matches any event name
   * 2. Combine multiple events with ",", for example "connect,disconnect", it matches event
   * "connect" and "disconnect"
   * 3. The single event name, for example, "connect", it matches "connect"
   */
  eventPattern?: string;
  /**
   * Gets or sets the matching pattern for category names. If not set, it matches any category.
   * There are 3 kind of patterns supported:
   * 1. "*", it to matches any category name
   * 2. Combine multiple categories with ",", for example "connections,messages", it matches
   * category "connections" and "messages"
   * 3. The single category name, for example, "connections", it matches the category "connections"
   */
  categoryPattern?: string;
  /**
   * Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category}
   * {event} inside the template, the value of the Upstream URL is dynamically calculated when the
   * client request comes in.
   * For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client
   * request from hub `chat` connects, it will first POST to this URL:
   * `http://example.com/chat/api/connect`.
   */
  urlTemplate: string;
}

/**
 * The settings for the Upstream when the Azure SignalR is in server-less mode.
 */
export interface ServerlessUpstreamSettings {
  /**
   * Gets or sets the list of Upstream URL templates. Order matters, and the first matching
   * template takes effects.
   */
  templates?: UpstreamTemplate[];
}

/**
 * Network ACL
 */
export interface NetworkACL {
  /**
   * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection,
   * RESTAPI.
   */
  allow?: string[];
  /**
   * Denied request types. The value can be one or more of: ClientConnection, ServerConnection,
   * RESTAPI.
   */
  deny?: string[];
}

/**
 * ACL for a private endpoint
 */
export interface PrivateEndpointACL {
  /**
   * Name of the private endpoint connection
   */
  name: string;
  /**
   * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection,
   * RESTAPI.
   */
  allow?: string[];
  /**
   * Denied request types. The value can be one or more of: ClientConnection, ServerConnection,
   * RESTAPI.
   */
  deny?: string[];
}

/**
 * Network ACLs for SignalR
 */
export interface SignalRNetworkACLs {
  /**
   * Default action when no other rule matches. Possible values include: 'Allow', 'Deny'
   */
  defaultAction?: ACLAction;
  /**
   * ACL for requests from public network
   */
  publicNetwork?: NetworkACL;
  /**
   * ACLs for requests from private endpoints
   */
  privateEndpoints?: PrivateEndpointACL[];
}

/**
 * Settings used to provision or configure the resource.
 */
export interface SignalRCreateOrUpdateProperties {
  /**
   * Prefix for the hostName of the SignalR service. Retained for future use.
   * The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
   */
  hostNamePrefix?: string;
  /**
   * List of SignalR featureFlags. e.g. ServiceMode.
   *
   * FeatureFlags that are not included in the parameters for the update operation will not be
   * modified.
   * And the response will only include featureFlags that are explicitly set.
   * When a featureFlag is not explicitly set, SignalR service will use its globally default value.
   * But keep in mind, the default value doesn't mean "false". It varies in terms of different
   * FeatureFlags.
   */
  features?: SignalRFeature[];
  /**
   * Cross-Origin Resource Sharing (CORS) settings.
   */
  cors?: SignalRCorsSettings;
  /**
   * Upstream settings when the Azure SignalR is in server-less mode.
   */
  upstream?: ServerlessUpstreamSettings;
  /**
   * Network ACLs
   */
  networkACLs?: SignalRNetworkACLs;
}

/**
 * Private link resource
 */
export interface PrivateLinkResource extends ProxyResource {
  /**
   * Group Id of the private link resource
   */
  groupId?: string;
  /**
   * Required members of the private link resource
   */
  requiredMembers?: string[];
  /**
   * Required private DNS zone names
   */
  requiredZoneNames?: string[];
}

/**
 * A class represents the access keys of SignalR service.
 */
export interface SignalRKeys {
  /**
   * The primary access key.
   */
  primaryKey?: string;
  /**
   * The secondary access key.
   */
  secondaryKey?: string;
  /**
   * SignalR connection string constructed via the primaryKey
   */
  primaryConnectionString?: string;
  /**
   * SignalR connection string constructed via the secondaryKey
   */
  secondaryConnectionString?: string;
}

/**
 * Parameters describes the request to regenerate access keys
 */
export interface RegenerateKeyParameters {
  /**
   * The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive). Possible
   * values include: 'Primary', 'Secondary'
   */
  keyType?: KeyType;
}

/**
 * Localizable String object containing the name and a localized value.
 */
export interface SignalRUsageName {
  /**
   * The identifier of the usage.
   */
  value?: string;
  /**
   * Localized name of the usage.
   */
  localizedValue?: string;
}

/**
 * Object that describes a specific usage of SignalR resources.
 */
export interface SignalRUsage {
  /**
   * Fully qualified ARM resource id
   */
  id?: string;
  /**
   * Current value for the usage quota.
   */
  currentValue?: number;
  /**
   * The maximum permitted value for the usage quota. If there is no limit, this value will be -1.
   */
  limit?: number;
  /**
   * Localizable String object containing the name and a localized value.
   */
  name?: SignalRUsageName;
  /**
   * Representing the units of the usage quota. Possible values are: Count, Bytes, Seconds,
   * Percent, CountPerSecond, BytesPerSecond.
   */
  unit?: string;
}

/**
 * Optional Parameters.
 */
export interface SignalRCheckNameAvailabilityOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters supplied to the operation.
   */
  parameters?: NameAvailabilityParameters;
}

/**
 * Optional Parameters.
 */
export interface SignalRRegenerateKeyOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameter that describes the Regenerate Key Operation.
   */
  parameters?: RegenerateKeyParameters;
}

/**
 * Optional Parameters.
 */
export interface SignalRCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters for the create or update operation
   */
  parameters?: SignalRResource;
}

/**
 * Optional Parameters.
 */
export interface SignalRUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters for the update operation
   */
  parameters?: SignalRResource;
}

/**
 * Optional Parameters.
 */
export interface SignalRBeginRegenerateKeyOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameter that describes the Regenerate Key Operation.
   */
  parameters?: RegenerateKeyParameters;
}

/**
 * Optional Parameters.
 */
export interface SignalRBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters for the create or update operation
   */
  parameters?: SignalRResource;
}

/**
 * Optional Parameters.
 */
export interface SignalRBeginUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters for the update operation
   */
  parameters?: SignalRResource;
}

/**
 * Optional Parameters.
 */
export interface SignalRPrivateEndpointConnectionsCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The resource of private endpoint and its properties.
   */
  parameters?: PrivateEndpointConnection;
}

/**
 * Optional Parameters.
 */
export interface SignalRPrivateEndpointConnectionsBeginCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The resource of private endpoint and its properties.
   */
  parameters?: PrivateEndpointConnection;
}

/**
 * An interface representing SignalRManagementClientOptions.
 */
export interface SignalRManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list REST API operations. It contains a list of operations.
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/**
 * @interface
 * Object that includes an array of SignalR services and a possible link for next set.
 * @extends Array<SignalRResource>
 */
export interface SignalRResourceList extends Array<SignalRResource> {
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/**
 * @interface
 * Contains a list of AzSignalR.Models.Response.PrivateLink.PrivateLinkResource and a possible link
 * to query more results
 * @extends Array<PrivateLinkResource>
 */
export interface PrivateLinkResourceList extends Array<PrivateLinkResource> {
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/**
 * @interface
 * Object that includes an array of SignalR resource usages and a possible link for next set.
 * @extends Array<SignalRUsage>
 */
export interface SignalRUsageList extends Array<SignalRUsage> {
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/**
 * Defines values for SignalRSkuTier.
 * Possible values include: 'Free', 'Basic', 'Standard', 'Premium'
 * @readonly
 * @enum {string}
 */
export type SignalRSkuTier = 'Free' | 'Basic' | 'Standard' | 'Premium';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Unknown', 'Succeeded', 'Failed', 'Canceled', 'Running', 'Creating',
 * 'Updating', 'Deleting', 'Moving'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Unknown' | 'Succeeded' | 'Failed' | 'Canceled' | 'Running' | 'Creating' | 'Updating' | 'Deleting' | 'Moving';

/**
 * Defines values for PrivateLinkServiceConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type PrivateLinkServiceConnectionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Disconnected';

/**
 * Defines values for ServiceKind.
 * Possible values include: 'SignalR', 'RawWebSockets'
 * @readonly
 * @enum {string}
 */
export type ServiceKind = 'SignalR' | 'RawWebSockets';

/**
 * Defines values for FeatureFlags.
 * Possible values include: 'ServiceMode', 'EnableConnectivityLogs', 'EnableMessagingLogs'
 * @readonly
 * @enum {string}
 */
export type FeatureFlags = 'ServiceMode' | 'EnableConnectivityLogs' | 'EnableMessagingLogs';

/**
 * Defines values for ACLAction.
 * Possible values include: 'Allow', 'Deny'
 * @readonly
 * @enum {string}
 */
export type ACLAction = 'Allow' | 'Deny';

/**
 * Defines values for KeyType.
 * Possible values include: 'Primary', 'Secondary'
 * @readonly
 * @enum {string}
 */
export type KeyType = 'Primary' | 'Secondary';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type SignalRCheckNameAvailabilityResponse = NameAvailability & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NameAvailability;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type SignalRListBySubscriptionResponse = SignalRResourceList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResourceList;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SignalRListByResourceGroupResponse = SignalRResourceList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResourceList;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type SignalRListKeysResponse = SignalRKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRKeys;
    };
};

/**
 * Contains response data for the regenerateKey operation.
 */
export type SignalRRegenerateKeyResponse = SignalRKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRKeys;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SignalRGetResponse = SignalRResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResource;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SignalRCreateOrUpdateResponse = SignalRResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResource;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SignalRUpdateResponse = SignalRResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResource;
    };
};

/**
 * Contains response data for the beginRegenerateKey operation.
 */
export type SignalRBeginRegenerateKeyResponse = SignalRKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRKeys;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type SignalRBeginCreateOrUpdateResponse = SignalRResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResource;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type SignalRBeginUpdateResponse = SignalRResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResource;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type SignalRListBySubscriptionNextResponse = SignalRResourceList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResourceList;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SignalRListByResourceGroupNextResponse = SignalRResourceList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRResourceList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SignalRPrivateEndpointConnectionsGetResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SignalRPrivateEndpointConnectionsCreateResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type SignalRPrivateEndpointConnectionsBeginCreateResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SignalRPrivateLinkResourcesListResponse = PrivateLinkResourceList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResourceList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SignalRPrivateLinkResourcesListNextResponse = PrivateLinkResourceList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResourceList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type UsagesListResponse = SignalRUsageList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRUsageList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type UsagesListNextResponse = SignalRUsageList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignalRUsageList;
    };
};
