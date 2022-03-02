import * as coreClient from "@azure/core-client";

/** Import update input item metadata. */
export interface ImportUpdateInputItem {
  /** Import manifest metadata like source URL, file size/hashes, etc. */
  importManifest: ImportManifestMetadata;
  /** Friendly update name. */
  friendlyName?: string;
  /** One or more update file properties like filename and source URL. */
  files?: FileImportMetadata[];
}

/** Metadata describing the import manifest, a document which describes the files and other metadata about an update version. */
export interface ImportManifestMetadata {
  /** Azure Blob location from which the import manifest can be downloaded by Device Update for IoT Hub. This is typically a read-only SAS-protected blob URL with an expiration set to at least 4 hours. */
  url: string;
  /** File size in number of bytes. */
  sizeInBytes: number;
  /** A JSON object containing the hash(es) of the file. At least SHA256 hash is required. This object can be thought of as a set of key-value pairs where the key is the hash algorithm, and the value is the hash of the file calculated using that algorithm. */
  hashes: { [propertyName: string]: string };
}

/** Metadata describing an update file. */
export interface FileImportMetadata {
  /** Update file name as specified inside import manifest. */
  filename: string;
  /** Azure Blob location from which the update file can be downloaded by Device Update for IoT Hub. This is typically a read-only SAS-protected blob URL with an expiration set to at least 4 hours. */
  url: string;
}

/** Update metadata. */
export interface Update {
  /** Update identity. */
  updateId: UpdateId;
  /** Update description specified by creator. */
  description?: string;
  /** Friendly update name specified by importer. */
  friendlyName?: string;
  /** Whether the update can be deployed to a device on its own. */
  isDeployable?: boolean;
  /** Update type. Deprecated in latest import manifest schema. */
  updateType?: string;
  /** String interpreted by Device Update client to determine if the update is installed on the device. Deprecated in latest import manifest schema. */
  installedCriteria?: string;
  /** List of update compatibility information. */
  compatibility: { [propertyName: string]: string }[];
  /** Update install instructions. */
  instructions?: Instructions;
  /** List of update identities that reference this update. */
  referencedBy?: UpdateId[];
  /** Update aggregate scan result (calculated from payload file scan results). */
  scanResult?: string;
  /** Schema version of manifest used to import the update. */
  manifestVersion: string;
  /** Date and time in UTC when the update was imported. */
  importedDateTime: Date;
  /** Date and time in UTC when the update was created. */
  createdDateTime: Date;
  /** Update ETag. */
  etag?: string;
}

/** Update identifier. */
export interface UpdateId {
  /** Update provider. */
  provider: string;
  /** Update name. */
  name: string;
  /** Update version. */
  version: string;
}

export interface Instructions {
  /** Collection of installation steps. */
  steps: Step[];
}

/** Update install instruction step. */
export interface Step {
  /** Step type. */
  type?: StepType;
  /** Step description. */
  description?: string;
  /** Identity of handler that will execute this step. Required if step type is inline. */
  handler?: string;
  /** Parameters to be passed to handler during execution. */
  handlerProperties?: Record<string, unknown>;
  /** Collection of file names to be passed to handler during execution. Required if step type is inline. */
  files?: string[];
  /** Referenced child update identity.  Required if step type is reference. */
  updateId?: UpdateId;
}

/** Common error response. */
export interface ErrorResponse {
  /** The error details. */
  error: ErrorModel;
}

/** Error details. */
export interface ErrorModel {
  /** Server defined error code. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of errors that led to the reported error. */
  details?: ErrorModel[];
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerError;
  /** Date and time in UTC when the error occurred. */
  occurredDateTime?: Date;
}

/** An object containing more specific information than the current object about the error. */
export interface InnerError {
  /** A more specific error code than what was provided by the containing error. */
  code: string;
  /** A human-readable representation of the error. */
  message?: string;
  /** The internal error or exception message. */
  errorDetail?: string;
  /** An object containing more specific information than the current object about the error. */
  innerError?: InnerError;
}

/** The list of updates. */
export interface UpdateList {
  /** The collection of pageable items. */
  value: Update[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** The list of strings with server paging support. */
export interface StringsList {
  /** The collection of pageable items. */
  value: string[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Update file metadata. */
export interface UpdateFile {
  /** File identity, generated by server at import time. */
  fileId: string;
  /** File name. */
  fileName: string;
  /** File size in number of bytes. */
  sizeInBytes: number;
  /** Mapping of hashing algorithm to base64 encoded hash values. */
  hashes: { [propertyName: string]: string };
  /** File MIME type. */
  mimeType?: string;
  /** Anti-malware scan result. */
  scanResult?: string;
  /** Anti-malware scan details. */
  scanDetails?: string;
  /** File ETag. */
  etag?: string;
}

/** The list of operations with server paging support. */
export interface UpdateOperationsList {
  /** The collection of pageable items. */
  value: UpdateOperation[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Operation metadata. */
export interface UpdateOperation {
  /** Operation Id. */
  operationId: string;
  /** Operation status. */
  status: OperationStatus;
  /** The identity of update being imported or deleted. For import, this property will only be populated after import manifest is processed successfully. */
  updateId?: UpdateId;
  /** Location of the imported update when operation is successful. */
  resourceLocation?: string;
  /** Operation error encountered, if any. */
  error?: ErrorModel;
  /** Operation correlation identity that can used by Microsoft Support for troubleshooting. */
  traceId?: string;
  /** Date and time in UTC when the operation status was last updated. */
  lastActionDateTime: Date;
  /** Date and time in UTC when the operation was created. */
  createdDateTime: Date;
  /** Operation ETag. */
  etag?: string;
}

/** The list of device classes. */
export interface DeviceClassesList {
  /** The collection of pageable items. */
  value: DeviceClass[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Device class metadata. */
export interface DeviceClass {
  /** The device class identifier. */
  deviceClassId: string;
  /** The compat properties of the device class. This object can be thought of as a set of key-value pairs where the key is the name of the compatibility property and the value is the value of the compatibility property. There will always be at least 1 compat property */
  compatProperties: { [propertyName: string]: string };
  /** Update identity. */
  bestCompatibleUpdateId: UpdateId | null;
}

/** The list of update identities. */
export interface UpdateIdsList {
  /** The collection of pageable items. */
  value: UpdateId[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** The list of devices. */
export interface DevicesList {
  /** The collection of pageable items. */
  value: Device[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Device metadata. */
export interface Device {
  /** Device identity. */
  deviceId: string;
  /** Device module identity. */
  moduleId?: string;
  /** Device class identity. */
  deviceClassId: string;
  /** Device manufacturer. */
  manufacturer: string;
  /** Device model. */
  model: string;
  /** Device group identity. */
  groupId?: string;
  /** Update identity. */
  lastAttemptedUpdateId?: UpdateId | null;
  /** State of the device in its last deployment. */
  deploymentStatus?: DeviceDeploymentState;
  /** Update identity. */
  installedUpdateId?: UpdateId | null;
  /** Boolean flag indicating whether the latest update is installed on the device */
  onLatestUpdate: boolean;
  /** The deployment identifier for the last deployment to the device */
  lastDeploymentId?: string;
  /** Last install result. */
  lastInstallResult?: InstallResult | null;
}

/** The install result of an update and any step results under it. */
export interface InstallResult {
  /** Install result code. */
  resultCode: number;
  /** Install extended result code */
  extendedResultCode: number;
  /** A string containing further details about the install result */
  resultDetails?: string;
  /** Array of step results */
  stepResults?: StepResult[];
}

/** The step result under an update. */
export interface StepResult {
  /** It is update id for update steps; otherwise it is null. */
  updateId?: UpdateId;
  /** Step description. It might be null for update steps. */
  description?: string;
  /** Install result code. */
  resultCode: number;
  /** Install extended result code */
  extendedResultCode: number;
  /** A string containing further details about the install result */
  resultDetails?: string;
}

/** Update compliance information. */
export interface UpdateCompliance {
  /** Total number of devices. */
  totalDeviceCount: number;
  /** Number of devices on the latest update. */
  onLatestUpdateDeviceCount: number;
  /** Number of devices with a newer update available. */
  newUpdatesAvailableDeviceCount: number;
  /** Number of devices with update in-progress. */
  updatesInProgressDeviceCount: number;
}

/** The list of device tags. */
export interface DeviceTagsList {
  /** The collection of pageable items. */
  value: DeviceTag[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Device tag properties. */
export interface DeviceTag {
  /** Tag name. */
  tagName: string;
  /** Number of devices with this tag. */
  deviceCount: number;
}

/** The list of groups. */
export interface GroupsList {
  /** The collection of pageable items. */
  value: Group[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Group details. */
export interface Group {
  /** Group identity. */
  groupId: string;
  /** Group type. */
  groupType: GroupType;
  /** IoT Hub tags. */
  tags: string[];
  /** Date and time when the update was created. */
  createdDateTime: string;
  /** The number of devices in the group. */
  deviceCount?: number;
  /** The deployment Id for the group. */
  deploymentId?: string;
  /** The device class Id for the group. */
  deviceClassId?: string;
}

/** The list of updatable devices. */
export interface UpdatableDevicesList {
  /** The collection of pageable items. */
  value: UpdatableDevices[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Update identifier and the number of devices for which the update is applicable. */
export interface UpdatableDevices {
  /** Update identity. */
  updateId: UpdateId;
  /** Total number of devices for which the update is applicable. */
  deviceCount: number;
}

/** The list of deployments. */
export interface DeploymentsList {
  /** The collection of pageable items. */
  value: Deployment[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Deployment metadata. */
export interface Deployment {
  /** The deployment identifier. */
  deploymentId: string;
  /** The deployment start datetime. */
  startDateTime: Date;
  /** Update identity. */
  updateId: UpdateId;
  /** The group identity */
  groupId: string;
  /** Boolean flag indicating whether the deployment was canceled. */
  isCanceled?: boolean;
  /** Boolean flag indicating whether the deployment has been retried. */
  isRetried?: boolean;
}

/** Deployment status metadata. */
export interface DeploymentStatus {
  /** The state of the deployment. */
  deploymentState: DeploymentState;
  /** The total number of devices in the deployment. */
  totalDevices?: number;
  /** The number of devices that are currently in deployment. */
  devicesInProgressCount?: number;
  /** The number of devices that have completed deployment with a failure. */
  devicesCompletedFailedCount?: number;
  /** The number of devices which have successfully completed deployment. */
  devicesCompletedSucceededCount?: number;
  /** The number of devices which have had their deployment canceled. */
  devicesCanceledCount?: number;
}

/** The list of deployment device states. */
export interface DeploymentDeviceStatesList {
  /** The collection of pageable items. */
  value: DeploymentDeviceState[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Deployment device status. */
export interface DeploymentDeviceState {
  /** Device identity. */
  deviceId: string;
  /** Device module identity. */
  moduleId?: string;
  /** The number of times this deployment has been retried on this device. */
  retryCount: number;
  /** Boolean flag indicating whether this device is in a newer deployment and can no longer retry this deployment. */
  movedOnToNewDeployment: boolean;
  /** Deployment device state. */
  deviceState: DeviceDeploymentState;
}

/** Operation metadata. */
export interface DeviceOperation {
  /** Operation Id. */
  operationId: string;
  /** Operation status. */
  status: OperationStatus;
  /** Operation error encountered, if any. */
  error?: ErrorModel;
  /** Operation correlation identity that can used by Microsoft Support for troubleshooting. */
  traceId?: string;
  /** Date and time in UTC when the operation status was last updated. */
  lastActionDateTime: Date;
  /** Date and time in UTC when the operation was created. */
  createdDateTime: Date;
  /** Operation ETag. */
  etag?: string;
}

/** The list of device operations with server paging support. */
export interface DeviceOperationsList {
  /** The collection of pageable items. */
  value: DeviceOperation[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Diagnostics request body */
export interface LogCollectionOperation {
  /** The diagnostics operation id. */
  operationId?: string;
  /** Array of Device Update agent ids */
  deviceList: DeviceUpdateAgentId[];
  /** Description of the diagnostics operation. */
  description?: string;
  /**
   * The timestamp when the operation was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdDateTime?: string;
  /**
   * A timestamp for when the current state was entered.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastActionDateTime?: string;
  /**
   * Operation status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: OperationStatus;
}

/** Device Update agent id */
export interface DeviceUpdateAgentId {
  /** Device Id */
  deviceId: string;
  /** Module Id */
  moduleId?: string;
}

/** The list of diagnostics operations with server paging support. */
export interface LogCollectionOperationList {
  /** The collection of pageable items. */
  value: LogCollectionOperation[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Device diagnostics operation detailed status */
export interface LogCollectionOperationDetailedStatus {
  /** The device diagnostics operation id. */
  operationId?: string;
  /** The timestamp when the operation was created. */
  createdDateTime?: string;
  /** A timestamp for when the current state was entered. */
  lastActionDateTime?: string;
  /** Operation status. */
  status?: OperationStatus;
  /** Status of the devices in the operation */
  deviceStatus?: LogCollectionOperationDeviceStatus[];
  /** Device diagnostics operation description. */
  description?: string;
}

/** Diagnostics operation device status */
export interface LogCollectionOperationDeviceStatus {
  /** Device id */
  deviceId: string;
  /** Module id. */
  moduleId?: string;
  /** Log upload status */
  status: OperationStatus;
  /** Log upload result code */
  resultCode?: string;
  /** Log upload extended result code */
  extendedResultCode?: string;
  /** Log upload location */
  logLocation?: string;
}

/** Operation status filter. */
export interface DeviceFilter {
  /** Device group identity. */
  groupId?: string;
}

/** Update filter. */
export interface UpdateFilter {
  /** Update isDeployable property. */
  isDeployable?: boolean;
}

/** Operation status filter. */
export interface OperationFilter {
  /** Operation status filter. */
  status?: OperationFilterStatus;
}

/** Deployment filter. */
export interface DeploymentFilter {
  /** Update provider. */
  provider?: string;
  /** Update name. */
  name?: string;
  /** Update version. */
  version?: string;
}

/** Group best updates filter. */
export interface GroupBestUpdatesFilter {
  /** Update provider. */
  provider?: string;
  /** Update name. */
  name?: string;
  /** Update version. */
  version?: string;
}

/** Deployment device state filter. */
export interface DeploymentDeviceStatesFilter {
  /** Device Identifier. */
  deviceId?: string;
  /** Device module Identifier. */
  moduleId?: string;
  /** The deployment device state. */
  deviceState?: DeviceState;
}

/** The list of diagnostics operations with detailed status, with server paging support. */
export interface LogCollectionOperationDetailedStatusList {
  /** The collection of pageable items. */
  value: LogCollectionOperationDetailedStatus[];
  /** The link to the next page of items. */
  nextLink?: string;
}

/** Defines headers for DeviceUpdate_importUpdate operation. */
export interface DeviceUpdateImportUpdateHeaders {
  /** Url to retrieve the import operation status. */
  operationLocation?: string;
}

/** Defines headers for DeviceUpdate_deleteUpdate operation. */
export interface DeviceUpdateDeleteUpdateHeaders {
  /** Url to retrieve the operation status */
  operationLocation?: string;
}

/** Defines headers for DeviceUpdate_getOperation operation. */
export interface DeviceUpdateGetOperationHeaders {
  /** Number of seconds to wait before checking the operation status again. */
  retryAfter?: string;
}

/** Defines headers for DeviceManagement_importDevices operation. */
export interface DeviceManagementImportDevicesHeaders {
  /** Url to retrieve the device import operation status. */
  operationLocation?: string;
}

/** Defines headers for DeviceManagement_getOperation operation. */
export interface DeviceManagementGetOperationHeaders {
  /** Number of seconds to wait before checking the operation status again. */
  retryAfter?: string;
}

/** Parameter group */
export interface AccessCondition {
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  ifNoneMatch?: string;
}

/** Known values of {@link ImportAction} that the service accepts. */
export enum KnownImportAction {
  /** Import action. */
  Import = "import"
}

/**
 * Defines values for ImportAction. \
 * {@link KnownImportAction} can be used interchangeably with ImportAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **import**: Import action.
 */
export type ImportAction = string;

/** Known values of {@link StepType} that the service accepts. */
export enum KnownStepType {
  /** Step type that performs code execution. */
  Inline = "Inline",
  /** Step type that installs another update. */
  Reference = "Reference"
}

/**
 * Defines values for StepType. \
 * {@link KnownStepType} can be used interchangeably with StepType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inline**: Step type that performs code execution. \
 * **Reference**: Step type that installs another update.
 */
export type StepType = string;

/** Known values of {@link OperationStatus} that the service accepts. */
export enum KnownOperationStatus {
  /** Undefined operation status. */
  Undefined = "Undefined",
  /** Background operation created but not started yet. */
  NotStarted = "NotStarted",
  /** Background operation is currently running. */
  Running = "Running",
  /** Background operation finished with success. */
  Succeeded = "Succeeded",
  /** Background operation finished with failure. */
  Failed = "Failed"
}

/**
 * Defines values for OperationStatus. \
 * {@link KnownOperationStatus} can be used interchangeably with OperationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Undefined**: Undefined operation status. \
 * **NotStarted**: Background operation created but not started yet. \
 * **Running**: Background operation is currently running. \
 * **Succeeded**: Background operation finished with success. \
 * **Failed**: Background operation finished with failure.
 */
export type OperationStatus = string;

/** Known values of {@link DeviceDeploymentState} that the service accepts. */
export enum KnownDeviceDeploymentState {
  /** Deployment has completed with success. */
  Succeeded = "Succeeded",
  /** Deployment is in progress. */
  InProgress = "InProgress",
  /** Deployment has completed with failure. */
  Failed = "Failed",
  /** Deployment was canceled. */
  Canceled = "Canceled",
  /** Deployment is not compatible with the device. */
  Incompatible = "Incompatible"
}

/**
 * Defines values for DeviceDeploymentState. \
 * {@link KnownDeviceDeploymentState} can be used interchangeably with DeviceDeploymentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Deployment has completed with success. \
 * **InProgress**: Deployment is in progress. \
 * **Failed**: Deployment has completed with failure. \
 * **Canceled**: Deployment was canceled. \
 * **Incompatible**: Deployment is not compatible with the device.
 */
export type DeviceDeploymentState = string;

/** Known values of {@link ImportType} that the service accepts. */
export enum KnownImportType {
  /** Import only devices but not modules. */
  Devices = "Devices",
  /** Import only modules but not devices. */
  Modules = "Modules",
  /** Import both devices and modules. */
  All = "All"
}

/**
 * Defines values for ImportType. \
 * {@link KnownImportType} can be used interchangeably with ImportType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Devices**: Import only devices but not modules. \
 * **Modules**: Import only modules but not devices. \
 * **All**: Import both devices and modules.
 */
export type ImportType = string;

/** Known values of {@link GroupType} that the service accepts. */
export enum KnownGroupType {
  /** DeviceClassId IoT Hub tag based group, all devices in the group are compatible with the same updates and share a tag and deviceClassId. */
  DeviceClassIdAndIoTHubTag = "DeviceClassIdAndIoTHubTag",
  /** Invalid deviceClassId IoT Hub tag based group, all devices in the group do not match the deviceClassId of the valid group they were tagged to join. */
  InvalidDeviceClassIdAndIoTHubTag = "InvalidDeviceClassIdAndIoTHubTag",
  /** Default deviceClassId based group, all devices in the group have no tags but are part of the same deviceClassId.  All devices will be part of one of these groups until a user tags them to join another group. */
  DefaultDeviceClassId = "DefaultDeviceClassId"
}

/**
 * Defines values for GroupType. \
 * {@link KnownGroupType} can be used interchangeably with GroupType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DeviceClassIdAndIoTHubTag**: DeviceClassId IoT Hub tag based group, all devices in the group are compatible with the same updates and share a tag and deviceClassId. \
 * **InvalidDeviceClassIdAndIoTHubTag**: Invalid deviceClassId IoT Hub tag based group, all devices in the group do not match the deviceClassId of the valid group they were tagged to join. \
 * **DefaultDeviceClassId**: Default deviceClassId based group, all devices in the group have no tags but are part of the same deviceClassId.  All devices will be part of one of these groups until a user tags them to join another group.
 */
export type GroupType = string;

/** Known values of {@link DeploymentState} that the service accepts. */
export enum KnownDeploymentState {
  /** The deployment can be sent to devices targeted in the deployment. */
  Active = "Active",
  /** A newer deployment for this group has been created and no devices in the group will receive this deployment. */
  Inactive = "Inactive",
  /** The deployment has been canceled and no devices will receive it. */
  Canceled = "Canceled"
}

/**
 * Defines values for DeploymentState. \
 * {@link KnownDeploymentState} can be used interchangeably with DeploymentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active**: The deployment can be sent to devices targeted in the deployment. \
 * **Inactive**: A newer deployment for this group has been created and no devices in the group will receive this deployment. \
 * **Canceled**: The deployment has been canceled and no devices will receive it.
 */
export type DeploymentState = string;

/** Known values of {@link DeploymentCancelAction} that the service accepts. */
export enum KnownDeploymentCancelAction {
  /** Cancel action. */
  Cancel = "cancel"
}

/**
 * Defines values for DeploymentCancelAction. \
 * {@link KnownDeploymentCancelAction} can be used interchangeably with DeploymentCancelAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **cancel**: Cancel action.
 */
export type DeploymentCancelAction = string;

/** Known values of {@link DeploymentRetryAction} that the service accepts. */
export enum KnownDeploymentRetryAction {
  /** Retry action. */
  Retry = "retry"
}

/**
 * Defines values for DeploymentRetryAction. \
 * {@link KnownDeploymentRetryAction} can be used interchangeably with DeploymentRetryAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **retry**: Retry action.
 */
export type DeploymentRetryAction = string;

/** Known values of {@link OperationFilterStatus} that the service accepts. */
export enum KnownOperationFilterStatus {
  Running = "Running",
  NotStarted = "NotStarted"
}

/**
 * Defines values for OperationFilterStatus. \
 * {@link KnownOperationFilterStatus} can be used interchangeably with OperationFilterStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Running** \
 * **NotStarted**
 */
export type OperationFilterStatus = string;

/** Known values of {@link DeviceState} that the service accepts. */
export enum KnownDeviceState {
  /** Not started (or uninitialized) */
  NotStarted = "NotStarted",
  /** Deployment incompatible for this device. */
  Incompatible = "Incompatible",
  /** Another Deployment is underway for this device. */
  AlreadyInDeployment = "AlreadyInDeployment",
  /** Deployment has been canceled for this device. */
  Canceled = "Canceled",
  /** Deployment underway. */
  InProgress = "InProgress",
  /** Deployment failed. */
  Failed = "Failed",
  /** Deployment completed successfully. */
  Succeeded = "Succeeded"
}

/**
 * Defines values for DeviceState. \
 * {@link KnownDeviceState} can be used interchangeably with DeviceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotStarted**: Not started (or uninitialized) \
 * **Incompatible**: Deployment incompatible for this device. \
 * **AlreadyInDeployment**: Another Deployment is underway for this device. \
 * **Canceled**: Deployment has been canceled for this device. \
 * **InProgress**: Deployment underway. \
 * **Failed**: Deployment failed. \
 * **Succeeded**: Deployment completed successfully.
 */
export type DeviceState = string;

/** Optional parameters. */
export interface DeviceUpdateImportUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the importUpdate operation. */
export type DeviceUpdateImportUpdateResponse = DeviceUpdateImportUpdateHeaders &
  Update;

/** Optional parameters. */
export interface DeviceUpdateListUpdatesOptionalParams
  extends coreClient.OperationOptions {
  /** Request updates matching a free-text search expression. */
  search?: string;
  /** Filter updates by its properties. */
  filter?: string;
}

/** Contains response data for the listUpdates operation. */
export type DeviceUpdateListUpdatesResponse = UpdateList;

/** Optional parameters. */
export interface DeviceUpdateGetUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  accessCondition?: AccessCondition;
}

/** Contains response data for the getUpdate operation. */
export type DeviceUpdateGetUpdateResponse = Update;

/** Optional parameters. */
export interface DeviceUpdateDeleteUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the deleteUpdate operation. */
export type DeviceUpdateDeleteUpdateResponse = DeviceUpdateDeleteUpdateHeaders;

/** Optional parameters. */
export interface DeviceUpdateListProvidersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listProviders operation. */
export type DeviceUpdateListProvidersResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListNamesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNames operation. */
export type DeviceUpdateListNamesResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListVersionsOptionalParams
  extends coreClient.OperationOptions {
  /** Filter updates by its properties. */
  filter?: string;
}

/** Contains response data for the listVersions operation. */
export type DeviceUpdateListVersionsResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListFilesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listFiles operation. */
export type DeviceUpdateListFilesResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateGetFileOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  accessCondition?: AccessCondition;
}

/** Contains response data for the getFile operation. */
export type DeviceUpdateGetFileResponse = UpdateFile;

/** Optional parameters. */
export interface DeviceUpdateListOperationsOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of operations returned. Only one specific filter is supported: "status eq 'NotStarted' or status eq 'Running'" */
  filter?: string;
  /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
  top?: number;
}

/** Contains response data for the listOperations operation. */
export type DeviceUpdateListOperationsResponse = UpdateOperationsList;

/** Optional parameters. */
export interface DeviceUpdateGetOperationOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  accessCondition?: AccessCondition;
}

/** Contains response data for the getOperation operation. */
export type DeviceUpdateGetOperationResponse = DeviceUpdateGetOperationHeaders &
  UpdateOperation;

/** Optional parameters. */
export interface DeviceUpdateListUpdatesNextOptionalParams
  extends coreClient.OperationOptions {
  /** Request updates matching a free-text search expression. */
  search?: string;
  /** Filter updates by its properties. */
  filter?: string;
}

/** Contains response data for the listUpdatesNext operation. */
export type DeviceUpdateListUpdatesNextResponse = UpdateList;

/** Optional parameters. */
export interface DeviceUpdateListProvidersNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listProvidersNext operation. */
export type DeviceUpdateListProvidersNextResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListNamesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNamesNext operation. */
export type DeviceUpdateListNamesNextResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListVersionsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Filter updates by its properties. */
  filter?: string;
}

/** Contains response data for the listVersionsNext operation. */
export type DeviceUpdateListVersionsNextResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListFilesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listFilesNext operation. */
export type DeviceUpdateListFilesNextResponse = StringsList;

/** Optional parameters. */
export interface DeviceUpdateListOperationsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of operations returned. Only one specific filter is supported: "status eq 'NotStarted' or status eq 'Running'" */
  filter?: string;
  /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
  top?: number;
}

/** Contains response data for the listOperationsNext operation. */
export type DeviceUpdateListOperationsNextResponse = UpdateOperationsList;

/** Optional parameters. */
export interface DeviceManagementListDeviceClassesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listDeviceClasses operation. */
export type DeviceManagementListDeviceClassesResponse = DeviceClassesList;

/** Optional parameters. */
export interface DeviceManagementGetDeviceClassOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDeviceClass operation. */
export type DeviceManagementGetDeviceClassResponse = DeviceClass;

/** Optional parameters. */
export interface DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listInstallableUpdatesForDeviceClass operation. */
export type DeviceManagementListInstallableUpdatesForDeviceClassResponse = UpdateIdsList;

/** Optional parameters. */
export interface DeviceManagementListDevicesOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of devices returned. You can filter on device GroupId or DeviceClassId. */
  filter?: string;
}

/** Contains response data for the listDevices operation. */
export type DeviceManagementListDevicesResponse = DevicesList;

/** Optional parameters. */
export interface DeviceManagementImportDevicesOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the importDevices operation. */
export type DeviceManagementImportDevicesResponse = DeviceManagementImportDevicesHeaders;

/** Optional parameters. */
export interface DeviceManagementGetDeviceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDevice operation. */
export type DeviceManagementGetDeviceResponse = Device;

/** Optional parameters. */
export interface DeviceManagementGetDeviceModuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDeviceModule operation. */
export type DeviceManagementGetDeviceModuleResponse = Device;

/** Optional parameters. */
export interface DeviceManagementGetUpdateComplianceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUpdateCompliance operation. */
export type DeviceManagementGetUpdateComplianceResponse = UpdateCompliance;

/** Optional parameters. */
export interface DeviceManagementListDeviceTagsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listDeviceTags operation. */
export type DeviceManagementListDeviceTagsResponse = DeviceTagsList;

/** Optional parameters. */
export interface DeviceManagementGetDeviceTagOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDeviceTag operation. */
export type DeviceManagementGetDeviceTagResponse = DeviceTag;

/** Optional parameters. */
export interface DeviceManagementListGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGroups operation. */
export type DeviceManagementListGroupsResponse = GroupsList;

/** Optional parameters. */
export interface DeviceManagementGetGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGroup operation. */
export type DeviceManagementGetGroupResponse = Group;

/** Optional parameters. */
export interface DeviceManagementCreateOrUpdateGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateGroup operation. */
export type DeviceManagementCreateOrUpdateGroupResponse = Group;

/** Optional parameters. */
export interface DeviceManagementDeleteGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeviceManagementGetGroupUpdateComplianceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGroupUpdateCompliance operation. */
export type DeviceManagementGetGroupUpdateComplianceResponse = UpdateCompliance;

/** Optional parameters. */
export interface DeviceManagementListBestUpdatesForGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of bestUpdates returned. You can filter on update Provider, Name and Version property. */
  filter?: string;
}

/** Contains response data for the listBestUpdatesForGroup operation. */
export type DeviceManagementListBestUpdatesForGroupResponse = UpdatableDevicesList;

/** Optional parameters. */
export interface DeviceManagementListDeploymentsForGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of deployments returned. You can filter on update Provider, Name and Version property. */
  filter?: string;
}

/** Contains response data for the listDeploymentsForGroup operation. */
export type DeviceManagementListDeploymentsForGroupResponse = DeploymentsList;

/** Optional parameters. */
export interface DeviceManagementGetDeploymentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDeployment operation. */
export type DeviceManagementGetDeploymentResponse = Deployment;

/** Optional parameters. */
export interface DeviceManagementCreateOrUpdateDeploymentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateDeployment operation. */
export type DeviceManagementCreateOrUpdateDeploymentResponse = Deployment;

/** Optional parameters. */
export interface DeviceManagementDeleteDeploymentOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeviceManagementGetDeploymentStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDeploymentStatus operation. */
export type DeviceManagementGetDeploymentStatusResponse = DeploymentStatus;

/** Optional parameters. */
export interface DeviceManagementListDeploymentDevicesOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of deployment device states returned. You can filter on deviceId and moduleId and/or deviceState. */
  filter?: string;
}

/** Contains response data for the listDeploymentDevices operation. */
export type DeviceManagementListDeploymentDevicesResponse = DeploymentDeviceStatesList;

/** Optional parameters. */
export interface DeviceManagementGetOperationOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  accessCondition?: AccessCondition;
}

/** Contains response data for the getOperation operation. */
export type DeviceManagementGetOperationResponse = DeviceManagementGetOperationHeaders &
  DeviceOperation;

/** Optional parameters. */
export interface DeviceManagementListOperationsOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of operations returned. Only one specific filter is supported: "status eq 'NotStarted' or status eq 'Running'" */
  filter?: string;
  /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
  top?: number;
}

/** Contains response data for the listOperations operation. */
export type DeviceManagementListOperationsResponse = DeviceOperationsList;

/** Optional parameters. */
export interface DeviceManagementCollectLogsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the collectLogs operation. */
export type DeviceManagementCollectLogsResponse = LogCollectionOperation;

/** Optional parameters. */
export interface DeviceManagementGetLogCollectionOperationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getLogCollectionOperation operation. */
export type DeviceManagementGetLogCollectionOperationResponse = LogCollectionOperation;

/** Optional parameters. */
export interface DeviceManagementListLogCollectionOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listLogCollectionOperations operation. */
export type DeviceManagementListLogCollectionOperationsResponse = LogCollectionOperationList;

/** Optional parameters. */
export interface DeviceManagementGetLogCollectionOperationDetailedStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getLogCollectionOperationDetailedStatus operation. */
export type DeviceManagementGetLogCollectionOperationDetailedStatusResponse = LogCollectionOperationDetailedStatus;

/** Optional parameters. */
export interface DeviceManagementStopDeploymentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the stopDeployment operation. */
export type DeviceManagementStopDeploymentResponse = Deployment;

/** Optional parameters. */
export interface DeviceManagementRetryDeploymentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the retryDeployment operation. */
export type DeviceManagementRetryDeploymentResponse = Deployment;

/** Optional parameters. */
export interface DeviceManagementListDeviceClassesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listDeviceClassesNext operation. */
export type DeviceManagementListDeviceClassesNextResponse = DeviceClassesList;

/** Optional parameters. */
export interface DeviceManagementListInstallableUpdatesForDeviceClassNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listInstallableUpdatesForDeviceClassNext operation. */
export type DeviceManagementListInstallableUpdatesForDeviceClassNextResponse = UpdateIdsList;

/** Optional parameters. */
export interface DeviceManagementListDevicesNextOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of devices returned. You can filter on device GroupId or DeviceClassId. */
  filter?: string;
}

/** Contains response data for the listDevicesNext operation. */
export type DeviceManagementListDevicesNextResponse = DevicesList;

/** Optional parameters. */
export interface DeviceManagementListDeviceTagsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listDeviceTagsNext operation. */
export type DeviceManagementListDeviceTagsNextResponse = DeviceTagsList;

/** Optional parameters. */
export interface DeviceManagementListGroupsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listGroupsNext operation. */
export type DeviceManagementListGroupsNextResponse = GroupsList;

/** Optional parameters. */
export interface DeviceManagementListBestUpdatesForGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of bestUpdates returned. You can filter on update Provider, Name and Version property. */
  filter?: string;
}

/** Contains response data for the listBestUpdatesForGroupNext operation. */
export type DeviceManagementListBestUpdatesForGroupNextResponse = UpdatableDevicesList;

/** Optional parameters. */
export interface DeviceManagementListDeploymentsForGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of deployments returned. You can filter on update Provider, Name and Version property. */
  filter?: string;
}

/** Contains response data for the listDeploymentsForGroupNext operation. */
export type DeviceManagementListDeploymentsForGroupNextResponse = DeploymentsList;

/** Optional parameters. */
export interface DeviceManagementListDeploymentDevicesNextOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of deployment device states returned. You can filter on deviceId and moduleId and/or deviceState. */
  filter?: string;
}

/** Contains response data for the listDeploymentDevicesNext operation. */
export type DeviceManagementListDeploymentDevicesNextResponse = DeploymentDeviceStatesList;

/** Optional parameters. */
export interface DeviceManagementListOperationsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Restricts the set of operations returned. Only one specific filter is supported: "status eq 'NotStarted' or status eq 'Running'" */
  filter?: string;
  /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
  top?: number;
}

/** Contains response data for the listOperationsNext operation. */
export type DeviceManagementListOperationsNextResponse = DeviceOperationsList;

/** Optional parameters. */
export interface DeviceManagementListLogCollectionOperationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listLogCollectionOperationsNext operation. */
export type DeviceManagementListLogCollectionOperationsNextResponse = LogCollectionOperationList;

/** Optional parameters. */
export interface DeviceUpdateClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
