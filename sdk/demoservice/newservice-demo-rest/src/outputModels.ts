// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface UpdateListOutput {
  /** The collection of pageable items. */
  value: Array<UpdateOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface UpdateOutput {
  /** Update identity. */
  updateId: UpdateIdOutput;
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
  compatibility: Array<Record<string, string>>;
  /** Update install instructions. */
  instructions?: InstructionsOutput;
  /** List of update identities that reference this update. */
  referencedBy?: Array<UpdateIdOutput>;
  /** Update aggregate scan result (calculated from payload file scan results). */
  scanResult?: string;
  /** Schema version of manifest used to import the update. */
  manifestVersion: string;
  /** Date and time in UTC when the update was imported. */
  importedDateTime: string;
  /** Date and time in UTC when the update was created. */
  createdDateTime: string;
  /** Update ETag. */
  etag?: string;
}

export interface UpdateIdOutput {
  /** Update provider. */
  provider: string;
  /** Update name. */
  name: string;
  /** Update version. */
  version: string;
}

export interface InstructionsOutput {
  /** Collection of installation steps. */
  steps: Array<StepOutput>;
}

export interface StepOutput {
  /** Step type. */
  type?: "Inline" | "Reference";
  /** Step description. */
  description?: string;
  /** Identity of handler that will execute this step. Required if step type is inline. */
  handler?: string;
  /** Parameters to be passed to handler during execution. */
  handlerProperties?: Record<string, unknown>;
  /** Collection of file names to be passed to handler during execution. Required if step type is inline. */
  files?: Array<string>;
  /** Referenced child update identity.  Required if step type is reference. */
  updateId?: UpdateIdOutput;
}

export interface ErrorResponseOutput {
  /** The error details. */
  error: ErrorModelOutput;
}

export interface ErrorModelOutput {
  /** Server defined error code. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of errors that led to the reported error. */
  details?: Array<ErrorModelOutput>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerErrorOutput;
  /** Date and time in UTC when the error occurred. */
  occurredDateTime?: string;
}

export interface InnerErrorOutput {
  /** A more specific error code than what was provided by the containing error. */
  code: string;
  /** A human-readable representation of the error. */
  message?: string;
  /** The internal error or exception message. */
  errorDetail?: string;
  /** An object containing more specific information than the current object about the error. */
  innerError?: InnerErrorOutput;
}

export interface StringsListOutput {
  /** The collection of pageable items. */
  value: Array<string>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface UpdateFileOutput extends UpdateFileBaseOutput {
  /** File identity, generated by server at import time. */
  fileId: string;
  /** Optional related files metadata used together DownloadHandler metadata to download payload file. */
  relatedFiles?: Array<UpdateFileBaseOutput>;
  /** Optional download handler for utilizing related files to download payload file. */
  downloadHandler?: UpdateFileDownloadHandlerOutput;
  /** File ETag. */
  etag?: string;
}

export interface UpdateFileBaseOutput {
  /** File name. */
  fileName: string;
  /** File size in number of bytes. */
  sizeInBytes: number;
  /** Mapping of hashing algorithm to base64 encoded hash values. */
  hashes: Record<string, string>;
  /** File MIME type. */
  mimeType?: string;
  /** Anti-malware scan result. */
  scanResult?: string;
  /** Anti-malware scan details. */
  scanDetails?: string;
  /** Optional file properties (not consumed by service but pass-through to device). */
  properties?: Record<string, string>;
}

export interface UpdateFileDownloadHandlerOutput {
  /** Download handler identifier. */
  id: string;
}

export interface UpdateOperationsListOutput {
  /** The collection of pageable items. */
  value: Array<UpdateOperationOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface UpdateOperationOutput {
  /** Operation Id. */
  operationId: string;
  /** Operation status. */
  status: "NotStarted" | "Running" | "Succeeded" | "Failed";
  /** The update being imported or deleted. For import, this property will only be populated after import manifest is processed successfully. */
  update?: UpdateInfoOutput;
  /** Location of the imported update when operation is successful. */
  resourceLocation?: string;
  /** Operation error encountered, if any. */
  error?: ErrorModelOutput;
  /** Operation correlation identity that can used by Microsoft Support for troubleshooting. */
  traceId?: string;
  /** Date and time in UTC when the operation status was last updated. */
  lastActionDateTime: string;
  /** Date and time in UTC when the operation was created. */
  createdDateTime: string;
  /** Operation ETag. */
  etag?: string;
}

export interface UpdateInfoOutput {
  /** Update identifier. */
  updateId: UpdateIdOutput;
  /** Update description. */
  description?: string;
  /** Friendly update name. */
  friendlyName?: string;
}

export interface DeviceClassesListOutput {
  /** The collection of pageable items. */
  value: Array<DeviceClassOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeviceClassOutput {
  /** The device class identifier. */
  deviceClassId: string;
  /** The device class friendly name. This can be updated by callers after the device class has been automatically created. */
  friendlyName?: string;
  /** The device class properties that are used to calculate the device class Id */
  deviceClassProperties: DeviceClassPropertiesOutput;
  /** Update that is best compatible with this device class. */
  bestCompatibleUpdate?: UpdateInfoOutput;
}

export interface DeviceClassPropertiesOutput {
  /** The Device Update agent contract model. */
  contractModel?: ContractModelOutput;
  /** The compat properties of the device class. This object can be thought of as a set of key-value pairs where the key is the name of the compatibility property and the value is the value of the compatibility property. There will always be at least 1 compat property */
  compatProperties: Record<string, string>;
}

export interface ContractModelOutput {
  /** The Device Update agent contract model Id of the device class. This is also used to calculate the device class Id. */
  id: string;
  /** The Device Update agent contract model name of the device class. Intended to be a more readable form of the contract model Id. */
  name: string;
}

export interface UpdateInfoListOutput {
  /** The collection of pageable items. */
  value: Array<UpdateInfoOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DevicesListOutput {
  /** The collection of pageable items. */
  value: Array<DeviceOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeviceOutput {
  /** Device identity. */
  deviceId: string;
  /** Device module identity. */
  moduleId?: string;
  /** Device class identity. */
  deviceClassId: string;
  /** Device group identity. */
  groupId?: string;
  /** The update that device last attempted to install. */
  lastAttemptedUpdate?: UpdateInfoOutput;
  /** State of the device in its last deployment. */
  deploymentStatus?: "Succeeded" | "InProgress" | "Canceled" | "Failed";
  /** Currently installed update on device. */
  installedUpdate?: UpdateInfoOutput;
  /** Boolean flag indicating whether the latest update is installed on the device */
  onLatestUpdate: boolean;
  /** The deployment identifier for the last deployment to the device */
  lastDeploymentId?: string;
  /** Last install result. */
  lastInstallResult?: InstallResultOutput;
}

export interface InstallResultOutput {
  /** Install result code. */
  resultCode: number;
  /** Install extended result code */
  extendedResultCode: number;
  /** A string containing further details about the install result */
  resultDetails?: string;
  /** Array of step results */
  stepResults?: Array<StepResultOutput>;
}

export interface StepResultOutput {
  /** The update that this step installs if it is of reference type. */
  update?: UpdateInfoOutput;
  /** Step description. */
  description?: string;
  /** Install result code. */
  resultCode: number;
  /** Install extended result code */
  extendedResultCode: number;
  /** A string containing further details about the install result */
  resultDetails?: string;
}

export interface UpdateComplianceOutput {
  /** Total number of devices. */
  totalDeviceCount: number;
  /** Number of devices on the latest update. */
  onLatestUpdateDeviceCount: number;
  /** Number of devices with a newer update available. */
  newUpdatesAvailableDeviceCount: number;
  /** Number of devices with update in-progress. */
  updatesInProgressDeviceCount: number;
}

export interface GroupsListOutput {
  /** The collection of pageable items. */
  value: Array<GroupOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface GroupOutput {
  /** Group identity. */
  groupId: string;
  /** Group type. */
  groupType: "IoTHubTag" | "DefaultNoTag";
  /** Date and time when the update was created. */
  createdDateTime: string;
  /** The number of devices in the group. */
  deviceCount?: number;
  /** The count of subgroups with new updates available. */
  subgroupsWithNewUpdatesAvailableCount?: number;
  /** The count of subgroups with updates in progress. */
  subgroupsWithUpdatesInProgressCount?: number;
  /** The count of subgroups with devices on the latest update. */
  subgroupsWithOnLatestUpdateCount?: number;
  /** The active deployment Ids for the group */
  deployments?: Array<string>;
}

export interface DeviceClassSubgroupUpdatableDevicesListOutput {
  /** The collection of pageable items. */
  value: Array<DeviceClassSubgroupUpdatableDevicesOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeviceClassSubgroupUpdatableDevicesOutput {
  /** The group Id */
  groupId: string;
  /** The device class subgroup's device class Id */
  deviceClassId: string;
  /** Update information. */
  update: UpdateInfoOutput;
  /** Total number of devices for which the update is applicable. */
  deviceCount: number;
}

export interface DeploymentsListOutput {
  /** The collection of pageable items. */
  value: Array<DeploymentOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeploymentOutput {
  /** The deployment identifier. */
  deploymentId: string;
  /** The deployment start datetime. */
  startDateTime: string;
  /** Update information. */
  update: UpdateInfoOutput;
  /** The group identity */
  groupId: string;
  /** The device class subgroups for the deployment. */
  deviceClassSubgroups?: Array<string>;
  /** Boolean flag indicating whether the deployment was canceled. */
  isCanceled?: boolean;
  /** Boolean flag indicating whether the deployment has been retried. */
  isRetried?: boolean;
  /** The rollback policy for the deployment. */
  rollbackPolicy?: CloudInitiatedRollbackPolicyOutput;
  /** Boolean flag indicating whether the deployment is a rollback deployment. */
  isCloudInitiatedRollback?: boolean;
}

export interface CloudInitiatedRollbackPolicyOutput {
  /** Update to rollback to. */
  update: UpdateInfoOutput;
  /** Failure conditions to initiate rollback policy. */
  failure: CloudInitiatedRollbackPolicyFailureOutput;
}

export interface CloudInitiatedRollbackPolicyFailureOutput {
  /** Percentage of devices that failed. */
  devicesFailedPercentage: number;
  /** Number of devices that failed. */
  devicesFailedCount: number;
}

export interface DeploymentStatusOutput {
  /** The group identity */
  groupId: string;
  /** The state of the deployment. */
  deploymentState:
    | "Active"
    | "ActiveWithSubgroupFailures"
    | "Failed"
    | "Inactive"
    | "Canceled";
  /** The error details of the Failed state.  This is not present if the deployment state is not Failed. */
  error?: ErrorModelOutput;
  /** The collection of device class subgroup status objects */
  subgroupStatus: Array<DeviceClassSubgroupDeploymentStatusOutput>;
}

export interface DeviceClassSubgroupDeploymentStatusOutput {
  /** The group identity */
  groupId: string;
  /** The device class subgroup identity */
  deviceClassId: string;
  /** The state of the subgroup deployment. */
  deploymentState: "Active" | "Failed" | "Inactive" | "Canceled";
  /** The error details of the Failed state.  This is not present if the deployment state is not Failed. */
  error?: ErrorModelOutput;
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

export interface DeviceClassSubgroupsListOutput {
  /** The collection of pageable items. */
  value: Array<DeviceClassSubgroupOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeviceClassSubgroupOutput {
  /** Device class subgroup identity. */
  deviceClassId: string;
  /** Group identity. */
  groupId: string;
  /** Date and time when the deviceclass subgroup was created. */
  createdDateTime: string;
  /** The number of devices in the deviceclass subgroup. */
  deviceCount?: number;
  /** The active deployment Id for the deviceclass subgroup. */
  deploymentId?: string;
}

export interface DeploymentDeviceStatesListOutput {
  /** The collection of pageable items. */
  value: Array<DeploymentDeviceStateOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeploymentDeviceStateOutput {
  /** Device identity. */
  deviceId: string;
  /** Device module identity. */
  moduleId?: string;
  /** The number of times this deployment has been retried on this device. */
  retryCount: number;
  /** Boolean flag indicating whether this device is in a newer deployment and can no longer retry this deployment. */
  movedOnToNewDeployment: boolean;
  /** Deployment device state. */
  deviceState: "Succeeded" | "InProgress" | "Canceled" | "Failed";
}

export interface DeviceOperationOutput {
  /** Operation Id. */
  operationId: string;
  /** Operation status. */
  status: "NotStarted" | "Running" | "Succeeded" | "Failed";
  /** Operation error encountered, if any. */
  error?: ErrorModelOutput;
  /** Operation correlation identity that can used by Microsoft Support for troubleshooting. */
  traceId?: string;
  /** Date and time in UTC when the operation status was last updated. */
  lastActionDateTime: string;
  /** Date and time in UTC when the operation was created. */
  createdDateTime: string;
  /** Operation ETag. */
  etag?: string;
}

export interface DeviceOperationsListOutput {
  /** The collection of pageable items. */
  value: Array<DeviceOperationOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface LogCollectionOperationOutput {
  /** The diagnostics operation id. */
  operationId?: string;
  /** Array of Device Update agent ids */
  deviceList: Array<DeviceUpdateAgentIdOutput>;
  /** Description of the diagnostics operation. */
  description?: string;
  /** The timestamp when the operation was created. */
  createdDateTime?: string;
  /** A timestamp for when the current state was entered. */
  lastActionDateTime?: string;
  /** Operation status. */
  status?: "NotStarted" | "Running" | "Succeeded" | "Failed";
}

export interface DeviceUpdateAgentIdOutput {
  /** Device Id */
  deviceId: string;
  /** Module Id */
  moduleId?: string;
}

export interface LogCollectionOperationListOutput {
  /** The collection of pageable items. */
  value: Array<LogCollectionOperationOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface LogCollectionOperationDetailedStatusOutput {
  /** The device diagnostics operation id. */
  operationId?: string;
  /** The timestamp when the operation was created. */
  createdDateTime?: string;
  /** A timestamp for when the current state was entered. */
  lastActionDateTime?: string;
  /** Operation status. */
  status?: "NotStarted" | "Running" | "Succeeded" | "Failed";
  /** Status of the devices in the operation */
  deviceStatus?: Array<LogCollectionOperationDeviceStatusOutput>;
  /** Device diagnostics operation description. */
  description?: string;
}

export interface LogCollectionOperationDeviceStatusOutput {
  /** Device id */
  deviceId: string;
  /** Module id. */
  moduleId?: string;
  /** Log upload status */
  status: "NotStarted" | "Running" | "Succeeded" | "Failed";
  /** Log upload result code */
  resultCode?: string;
  /** Log upload extended result code */
  extendedResultCode?: string;
  /** Log upload location */
  logLocation?: string;
}

export interface DeviceHealthListOutput {
  /** The collection of pageable items. */
  value: Array<DeviceHealthOutput>;
  /** The link to the next page of items. */
  nextLink?: string;
}

export interface DeviceHealthOutput {
  /** Device id */
  deviceId: string;
  /** Module id */
  moduleId?: string;
  /** Aggregate device health state */
  state: "healthy" | "unhealthy";
  /** Digital twin model Id */
  digitalTwinModelId?: string;
  /** Array of health checks and their results */
  healthChecks: Array<HealthCheckOutput>;
}

export interface HealthCheckOutput {
  /** Health check name */
  name?: string;
  /** Health check result */
  result?: "success" | "userError";
}
