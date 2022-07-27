/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The List availabilityStatus operation response. */
export interface AvailabilityStatusListResult {
  /** The list of availabilityStatuses. */
  value: AvailabilityStatus[];
  /** The URI to fetch the next page of availabilityStatuses. Call ListNext() with this URI to fetch the next page of availabilityStatuses. */
  nextLink?: string;
}

/** availabilityStatus of a resource. */
export interface AvailabilityStatus {
  /** Azure Resource Manager Identity for the availabilityStatuses resource. */
  id?: string;
  /** current. */
  name?: string;
  /** Microsoft.ResourceHealth/AvailabilityStatuses. */
  type?: string;
  /** Azure Resource Manager geo location of the resource. */
  location?: string;
  /** Properties of availability state. */
  properties?: AvailabilityStatusProperties;
}

/** Properties of availability state. */
export interface AvailabilityStatusProperties {
  /** Availability status of the resource. When it is null, this availabilityStatus object represents an availability impacting event */
  availabilityState?: AvailabilityStateValues;
  /** Title description of the availability status. */
  title?: string;
  /** Summary description of the availability status. */
  summary?: string;
  /** Details of the availability status. */
  detailedStatus?: string;
  /** When the resource's availabilityState is Unavailable, it describes where the health impacting event was originated. Examples are planned, unplanned, user initiated or an outage etc. */
  reasonType?: string;
  /** When the resource's availabilityState is Unavailable, it provides the Timestamp for when the health impacting event was received. */
  rootCauseAttributionTime?: Date;
  /** In case of an availability impacting event, it describes when the health impacting event was originated. Examples are Lifecycle, Downtime, Fault Analysis etc. */
  healthEventType?: string;
  /** In case of an availability impacting event, it describes where the health impacting event was originated. Examples are PlatformInitiated, UserInitiated etc. */
  healthEventCause?: string;
  /** In case of an availability impacting event, it describes the category of a PlatformInitiated health impacting event. Examples are Planned, Unplanned etc. */
  healthEventCategory?: string;
  /** It is a unique Id that identifies the event */
  healthEventId?: string;
  /** When the resource's availabilityState is Unavailable and the reasonType is not User Initiated, it provides the date and time for when the issue is expected to be resolved. */
  resolutionETA?: Date;
  /** Timestamp for when last change in health status occurred. */
  occuredTime?: Date;
  /** Chronicity of the availability transition. */
  reasonChronicity?: ReasonChronicityTypes;
  /** Timestamp for when the health was last checked. */
  reportedTime?: Date;
  /** An annotation describing a change in the availabilityState to Available from Unavailable with a reasonType of type Unplanned */
  recentlyResolved?: AvailabilityStatusPropertiesRecentlyResolved;
  /** Lists actions the user can take based on the current availabilityState of the resource. */
  recommendedActions?: RecommendedAction[];
  /** Lists the service impacting events that may be affecting the health of the resource. */
  serviceImpactingEvents?: ServiceImpactingEvent[];
}

/** An annotation describing a change in the availabilityState to Available from Unavailable with a reasonType of type Unplanned */
export interface AvailabilityStatusPropertiesRecentlyResolved {
  /** Timestamp for when the availabilityState changed to Unavailable */
  unavailableOccuredTime?: Date;
  /** Timestamp when the availabilityState changes to Available. */
  resolvedTime?: Date;
  /** Brief description of cause of the resource becoming unavailable. */
  unavailableSummary?: string;
}

/** Lists actions the user can take based on the current availabilityState of the resource. */
export interface RecommendedAction {
  /** Recommended action. */
  action?: string;
  /** Link to the action */
  actionUrl?: string;
  /** Substring of action, it describes which text should host the action url. */
  actionUrlText?: string;
}

/** Lists the service impacting events that may be affecting the health of the resource. */
export interface ServiceImpactingEvent {
  /** Timestamp for when the event started. */
  eventStartTime?: Date;
  /** Timestamp for when event was submitted/detected. */
  eventStatusLastModifiedTime?: Date;
  /** Correlation id for the event */
  correlationId?: string;
  /** Status of the service impacting event. */
  status?: ServiceImpactingEventStatus;
  /** Properties of the service impacting event. */
  incidentProperties?: ServiceImpactingEventIncidentProperties;
}

/** Status of the service impacting event. */
export interface ServiceImpactingEventStatus {
  /** Current status of the event */
  value?: string;
}

/** Properties of the service impacting event. */
export interface ServiceImpactingEventIncidentProperties {
  /** Title of the incident. */
  title?: string;
  /** Service impacted by the event. */
  service?: string;
  /** Region impacted by the event. */
  region?: string;
  /** Type of Event. */
  incidentType?: string;
}

/** Error details. */
export interface ErrorResponse {
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
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: string;
}

/** Lists the operations response. */
export interface OperationListResult {
  /** List of operations available in the resourcehealth resource provider. */
  value: Operation[];
}

/** Operation available in the resourcehealth resource provider. */
export interface Operation {
  /** Name of the operation. */
  name?: string;
  /** Properties of the operation. */
  display?: OperationDisplay;
}

/** Properties of the operation. */
export interface OperationDisplay {
  /** Provider name. */
  provider?: string;
  /** Resource name. */
  resource?: string;
  /** Operation name. */
  operation?: string;
  /** Description of the operation. */
  description?: string;
}

/** Common  fields that are returned in the response for all Azure Resource Manager resources */
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
}

/** Banner type of emerging issue. */
export interface StatusBanner {
  /** The banner title. */
  title?: string;
  /** The details of banner. */
  message?: string;
  /** The cloud type of this banner. */
  cloud?: string;
  /** The last time modified on this banner. */
  lastModifiedTime?: Date;
}

/** Object of impacted region. */
export interface ImpactedRegion {
  /** The impacted region id. */
  id?: string;
  /** The impacted region name. */
  name?: string;
}

/** impactedResource with health status */
export type ImpactedResourceStatus = Resource & {
  /** Impacted resource status of the resource. */
  availabilityState?: AvailabilityStateValues;
  /** Title description of the impacted resource status. */
  title?: string;
  /** Summary description of the impacted resource status. */
  summary?: string;
  /** When the resource's availabilityState is Unavailable, it describes where the health impacting event was originated. */
  reasonType?: ReasonTypeValues;
  /** Timestamp for when last change in health status occurred. */
  occurredTime?: Date;
};

/** Known values of {@link AvailabilityStateValues} that the service accepts. */
export enum KnownAvailabilityStateValues {
  Available = "Available",
  Unavailable = "Unavailable",
  Degraded = "Degraded",
  Unknown = "Unknown"
}

/**
 * Defines values for AvailabilityStateValues. \
 * {@link KnownAvailabilityStateValues} can be used interchangeably with AvailabilityStateValues,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Available** \
 * **Unavailable** \
 * **Degraded** \
 * **Unknown**
 */
export type AvailabilityStateValues = string;

/** Known values of {@link ReasonChronicityTypes} that the service accepts. */
export enum KnownReasonChronicityTypes {
  Transient = "Transient",
  Persistent = "Persistent"
}

/**
 * Defines values for ReasonChronicityTypes. \
 * {@link KnownReasonChronicityTypes} can be used interchangeably with ReasonChronicityTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Transient** \
 * **Persistent**
 */
export type ReasonChronicityTypes = string;

/** Known values of {@link ReasonTypeValues} that the service accepts. */
export enum KnownReasonTypeValues {
  Unplanned = "Unplanned",
  Planned = "Planned",
  UserInitiated = "UserInitiated"
}

/**
 * Defines values for ReasonTypeValues. \
 * {@link KnownReasonTypeValues} can be used interchangeably with ReasonTypeValues,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unplanned** \
 * **Planned** \
 * **UserInitiated**
 */
export type ReasonTypeValues = string;

/** Optional parameters. */
export interface AvailabilityStatusesListBySubscriptionIdOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the listBySubscriptionId operation. */
export type AvailabilityStatusesListBySubscriptionIdResponse = AvailabilityStatusListResult;

/** Optional parameters. */
export interface AvailabilityStatusesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export type AvailabilityStatusesListByResourceGroupResponse = AvailabilityStatusListResult;

/** Optional parameters. */
export interface AvailabilityStatusesGetByResourceOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the getByResource operation. */
export type AvailabilityStatusesGetByResourceResponse = AvailabilityStatus;

/** Optional parameters. */
export interface AvailabilityStatusesListOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the list operation. */
export type AvailabilityStatusesListResponse = AvailabilityStatusListResult;

/** Optional parameters. */
export interface AvailabilityStatusesListBySubscriptionIdNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the listBySubscriptionIdNext operation. */
export type AvailabilityStatusesListBySubscriptionIdNextResponse = AvailabilityStatusListResult;

/** Optional parameters. */
export interface AvailabilityStatusesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type AvailabilityStatusesListByResourceGroupNextResponse = AvailabilityStatusListResult;

/** Optional parameters. */
export interface AvailabilityStatusesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN */
  filter?: string;
  /** Setting $expand=recommendedactions in url query expands the recommendedactions in the response. */
  expand?: string;
}

/** Contains response data for the listNext operation. */
export type AvailabilityStatusesListNextResponse = AvailabilityStatusListResult;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface MicrosoftResourceHealthOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
