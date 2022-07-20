// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UpdatesImportUpdateParameters,
  UpdatesGetUpdateParameters,
  UpdatesDeleteUpdateParameters,
  UpdatesGetProvidersParameters,
  UpdatesGetNamesParameters,
  UpdatesGetVersionsParameters,
  UpdatesGetFilesParameters,
  UpdatesGetFileParameters,
  UpdatesGetOperationsParameters,
  UpdatesGetOperationParameters,
  DevicesGetAllDeviceClassesParameters,
  DevicesGetDeviceClassParameters,
  DevicesGetDeviceClassDeviceIdsParameters,
  DevicesGetDeviceClassInstallableUpdatesParameters,
  DevicesGetAllDevicesParameters,
  DevicesGetDeviceParameters,
  DevicesGetUpdateComplianceParameters,
  DevicesGetAllDeviceTagsParameters,
  DevicesGetDeviceTagParameters,
  DevicesGetAllGroupsParameters,
  DevicesGetGroupParameters,
  DevicesCreateOrUpdateGroupParameters,
  DevicesDeleteGroupParameters,
  DevicesGetGroupUpdateComplianceParameters,
  DevicesGetGroupBestUpdatesParameters,
  DeploymentsGetAllDeploymentsParameters,
  DeploymentsGetDeploymentParameters,
  DeploymentsCreateOrUpdateDeploymentParameters,
  DeploymentsDeleteDeploymentParameters,
  DeploymentsGetDeploymentStatusParameters,
  DeploymentsGetDeploymentDevicesParameters,
  DeploymentsCancelDeploymentParameters,
  DeploymentsRetryDeploymentParameters
} from "./parameters";
import {
  UpdatesImportUpdate202Response,
  UpdatesImportUpdate429Response,
  UpdatesGetUpdate200Response,
  UpdatesGetUpdate304Response,
  UpdatesGetUpdate404Response,
  UpdatesGetUpdate429Response,
  UpdatesDeleteUpdate202Response,
  UpdatesDeleteUpdate429Response,
  UpdatesGetProviders200Response,
  UpdatesGetProviders429Response,
  UpdatesGetNames200Response,
  UpdatesGetNames404Response,
  UpdatesGetNames429Response,
  UpdatesGetVersions200Response,
  UpdatesGetVersions404Response,
  UpdatesGetVersions429Response,
  UpdatesGetFiles200Response,
  UpdatesGetFiles404Response,
  UpdatesGetFiles429Response,
  UpdatesGetFile200Response,
  UpdatesGetFile304Response,
  UpdatesGetFile404Response,
  UpdatesGetFile429Response,
  UpdatesGetOperations200Response,
  UpdatesGetOperations429Response,
  UpdatesGetOperation200Response,
  UpdatesGetOperation304Response,
  UpdatesGetOperation404Response,
  UpdatesGetOperation429Response,
  DevicesGetAllDeviceClasses200Response,
  DevicesGetDeviceClass200Response,
  DevicesGetDeviceClass404Response,
  DevicesGetDeviceClassDeviceIds200Response,
  DevicesGetDeviceClassDeviceIds404Response,
  DevicesGetDeviceClassInstallableUpdates200Response,
  DevicesGetDeviceClassInstallableUpdates404Response,
  DevicesGetAllDevices200Response,
  DevicesGetDevice200Response,
  DevicesGetDevice404Response,
  DevicesGetUpdateCompliance200Response,
  DevicesGetAllDeviceTags200Response,
  DevicesGetDeviceTag200Response,
  DevicesGetDeviceTag404Response,
  DevicesGetAllGroups200Response,
  DevicesGetGroup200Response,
  DevicesGetGroup404Response,
  DevicesCreateOrUpdateGroup200Response,
  DevicesCreateOrUpdateGroup400Response,
  DevicesCreateOrUpdateGroup404Response,
  DevicesDeleteGroup200Response,
  DevicesDeleteGroup204Response,
  DevicesGetGroupUpdateCompliance200Response,
  DevicesGetGroupUpdateCompliance404Response,
  DevicesGetGroupBestUpdates200Response,
  DevicesGetGroupBestUpdates404Response,
  DeploymentsGetAllDeployments200Response,
  DeploymentsGetDeployment200Response,
  DeploymentsGetDeployment404Response,
  DeploymentsCreateOrUpdateDeployment200Response,
  DeploymentsCreateOrUpdateDeployment404Response,
  DeploymentsDeleteDeployment200Response,
  DeploymentsDeleteDeployment404Response,
  DeploymentsGetDeploymentStatus200Response,
  DeploymentsGetDeploymentStatus404Response,
  DeploymentsGetDeploymentDevices200Response,
  DeploymentsGetDeploymentDevices404Response,
  DeploymentsCancelDeployment200Response,
  DeploymentsCancelDeployment404Response,
  DeploymentsRetryDeployment200Response,
  DeploymentsRetryDeployment404Response
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface UpdatesImportUpdate {
  /** Import new update version. */
  post(
    options: UpdatesImportUpdateParameters
  ): StreamableMethod<
    UpdatesImportUpdate202Response | UpdatesImportUpdate429Response
  >;
}

export interface UpdatesGetUpdate {
  /** Get a specific update version. */
  get(
    options?: UpdatesGetUpdateParameters
  ): StreamableMethod<
    | UpdatesGetUpdate200Response
    | UpdatesGetUpdate304Response
    | UpdatesGetUpdate404Response
    | UpdatesGetUpdate429Response
  >;
  /** Delete a specific update version. */
  delete(
    options?: UpdatesDeleteUpdateParameters
  ): StreamableMethod<
    UpdatesDeleteUpdate202Response | UpdatesDeleteUpdate429Response
  >;
}

export interface UpdatesGetProviders {
  /** Get a list of all update providers that have been imported to Device Update for IoT Hub. */
  get(
    options?: UpdatesGetProvidersParameters
  ): StreamableMethod<
    UpdatesGetProviders200Response | UpdatesGetProviders429Response
  >;
}

export interface UpdatesGetNames {
  /** Get a list of all update names that match the specified provider. */
  get(
    options?: UpdatesGetNamesParameters
  ): StreamableMethod<
    | UpdatesGetNames200Response
    | UpdatesGetNames404Response
    | UpdatesGetNames429Response
  >;
}

export interface UpdatesGetVersions {
  /** Get a list of all update versions that match the specified provider and name. */
  get(
    options?: UpdatesGetVersionsParameters
  ): StreamableMethod<
    | UpdatesGetVersions200Response
    | UpdatesGetVersions404Response
    | UpdatesGetVersions429Response
  >;
}

export interface UpdatesGetFiles {
  /** Get a list of all update file identifiers for the specified version. */
  get(
    options?: UpdatesGetFilesParameters
  ): StreamableMethod<
    | UpdatesGetFiles200Response
    | UpdatesGetFiles404Response
    | UpdatesGetFiles429Response
  >;
}

export interface UpdatesGetFile {
  /** Get a specific update file from the version. */
  get(
    options?: UpdatesGetFileParameters
  ): StreamableMethod<
    | UpdatesGetFile200Response
    | UpdatesGetFile304Response
    | UpdatesGetFile404Response
    | UpdatesGetFile429Response
  >;
}

export interface UpdatesGetOperations {
  /** Get a list of all import update operations. Completed operations are kept for 7 days before auto-deleted. Delete operations are not returned by this API version. */
  get(
    options?: UpdatesGetOperationsParameters
  ): StreamableMethod<
    UpdatesGetOperations200Response | UpdatesGetOperations429Response
  >;
}

export interface UpdatesGetOperation {
  /** Retrieve operation status. */
  get(
    options?: UpdatesGetOperationParameters
  ): StreamableMethod<
    | UpdatesGetOperation200Response
    | UpdatesGetOperation304Response
    | UpdatesGetOperation404Response
    | UpdatesGetOperation429Response
  >;
}

export interface DevicesGetAllDeviceClasses {
  /** Gets a list of all device classes (unique combinations of device manufacturer and model) for all devices connected to Device Update for IoT Hub. */
  get(
    options?: DevicesGetAllDeviceClassesParameters
  ): StreamableMethod<DevicesGetAllDeviceClasses200Response>;
}

export interface DevicesGetDeviceClass {
  /** Gets the properties of a device class. */
  get(
    options?: DevicesGetDeviceClassParameters
  ): StreamableMethod<
    DevicesGetDeviceClass200Response | DevicesGetDeviceClass404Response
  >;
}

export interface DevicesGetDeviceClassDeviceIds {
  /** Gets a list of device identifiers in a device class. */
  get(
    options?: DevicesGetDeviceClassDeviceIdsParameters
  ): StreamableMethod<
    | DevicesGetDeviceClassDeviceIds200Response
    | DevicesGetDeviceClassDeviceIds404Response
  >;
}

export interface DevicesGetDeviceClassInstallableUpdates {
  /** Gets a list of installable updates for a device class. */
  get(
    options?: DevicesGetDeviceClassInstallableUpdatesParameters
  ): StreamableMethod<
    | DevicesGetDeviceClassInstallableUpdates200Response
    | DevicesGetDeviceClassInstallableUpdates404Response
  >;
}

export interface DevicesGetAllDevices {
  /** Gets a list of devices connected to Device Update for IoT Hub. */
  get(
    options?: DevicesGetAllDevicesParameters
  ): StreamableMethod<DevicesGetAllDevices200Response>;
}

export interface DevicesGetDevice {
  /** Gets the device properties and latest deployment status for a device connected to Device Update for IoT Hub. */
  get(
    options?: DevicesGetDeviceParameters
  ): StreamableMethod<
    DevicesGetDevice200Response | DevicesGetDevice404Response
  >;
}

export interface DevicesGetUpdateCompliance {
  /** Gets the breakdown of how many devices are on their latest update, have new updates available, or are in progress receiving new updates. */
  get(
    options?: DevicesGetUpdateComplianceParameters
  ): StreamableMethod<DevicesGetUpdateCompliance200Response>;
}

export interface DevicesGetAllDeviceTags {
  /** Gets a list of available group device tags for all devices connected to Device Update for IoT Hub. */
  get(
    options?: DevicesGetAllDeviceTagsParameters
  ): StreamableMethod<DevicesGetAllDeviceTags200Response>;
}

export interface DevicesGetDeviceTag {
  /** Gets a count of how many devices have a device tag. */
  get(
    options?: DevicesGetDeviceTagParameters
  ): StreamableMethod<
    DevicesGetDeviceTag200Response | DevicesGetDeviceTag404Response
  >;
}

export interface DevicesGetAllGroups {
  /** Gets a list of all device groups. */
  get(
    options?: DevicesGetAllGroupsParameters
  ): StreamableMethod<DevicesGetAllGroups200Response>;
}

export interface DevicesGetGroup {
  /** Gets the properties of a group. */
  get(
    options?: DevicesGetGroupParameters
  ): StreamableMethod<DevicesGetGroup200Response | DevicesGetGroup404Response>;
  /** Create or update a device group. */
  put(
    options: DevicesCreateOrUpdateGroupParameters
  ): StreamableMethod<
    | DevicesCreateOrUpdateGroup200Response
    | DevicesCreateOrUpdateGroup400Response
    | DevicesCreateOrUpdateGroup404Response
  >;
  /** Deletes a device group. */
  delete(
    options?: DevicesDeleteGroupParameters
  ): StreamableMethod<
    DevicesDeleteGroup200Response | DevicesDeleteGroup204Response
  >;
}

export interface DevicesGetGroupUpdateCompliance {
  /** Get group update compliance information such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update. */
  get(
    options?: DevicesGetGroupUpdateComplianceParameters
  ): StreamableMethod<
    | DevicesGetGroupUpdateCompliance200Response
    | DevicesGetGroupUpdateCompliance404Response
  >;
}

export interface DevicesGetGroupBestUpdates {
  /** Get the best available updates for a group and a count of how many devices need each update. */
  get(
    options?: DevicesGetGroupBestUpdatesParameters
  ): StreamableMethod<
    | DevicesGetGroupBestUpdates200Response
    | DevicesGetGroupBestUpdates404Response
  >;
}

export interface DeploymentsGetAllDeployments {
  /** Gets a list of deployments. */
  get(
    options?: DeploymentsGetAllDeploymentsParameters
  ): StreamableMethod<DeploymentsGetAllDeployments200Response>;
}

export interface DeploymentsGetDeployment {
  /** Gets the properties of a deployment. */
  get(
    options?: DeploymentsGetDeploymentParameters
  ): StreamableMethod<
    DeploymentsGetDeployment200Response | DeploymentsGetDeployment404Response
  >;
  /** Creates or updates a deployment. */
  put(
    options: DeploymentsCreateOrUpdateDeploymentParameters
  ): StreamableMethod<
    | DeploymentsCreateOrUpdateDeployment200Response
    | DeploymentsCreateOrUpdateDeployment404Response
  >;
  /** Deletes a deployment. */
  delete(
    options?: DeploymentsDeleteDeploymentParameters
  ): StreamableMethod<
    | DeploymentsDeleteDeployment200Response
    | DeploymentsDeleteDeployment404Response
  >;
  /** Cancels a deployment. */
  post(
    options:
      | DeploymentsCancelDeploymentParameters
      | DeploymentsRetryDeploymentParameters
  ):
    | StreamableMethod<
        | DeploymentsCancelDeployment200Response
        | DeploymentsCancelDeployment404Response
      >
    | StreamableMethod<
        | DeploymentsRetryDeployment200Response
        | DeploymentsRetryDeployment404Response
      >;
}

export interface DeploymentsGetDeploymentStatus {
  /** Gets the status of a deployment including a breakdown of how many devices in the deployment are in progress, completed, or failed. */
  get(
    options?: DeploymentsGetDeploymentStatusParameters
  ): StreamableMethod<
    | DeploymentsGetDeploymentStatus200Response
    | DeploymentsGetDeploymentStatus404Response
  >;
}

export interface DeploymentsGetDeploymentDevices {
  /** Gets a list of devices in a deployment along with their state. Useful for getting a list of failed devices. */
  get(
    options?: DeploymentsGetDeploymentDevicesParameters
  ): StreamableMethod<
    | DeploymentsGetDeploymentDevices200Response
    | DeploymentsGetDeploymentDevices404Response
  >;
}

export interface Routes {
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates' has methods for the following verbs: post */
  (
    path: "/deviceupdate/{instanceId}/v2/updates",
    instanceId: string
  ): UpdatesImportUpdate;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/providers/\{provider\}/names/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}",
    instanceId: string,
    provider: string,
    name: string,
    version: string
  ): UpdatesGetUpdate;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/providers' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/providers",
    instanceId: string
  ): UpdatesGetProviders;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/providers/\{provider\}/names' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names",
    instanceId: string,
    provider: string
  ): UpdatesGetNames;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/providers/\{provider\}/names/\{name\}/versions' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions",
    instanceId: string,
    provider: string,
    name: string
  ): UpdatesGetVersions;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/providers/\{provider\}/names/\{name\}/versions/\{version\}/files' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}/files",
    instanceId: string,
    provider: string,
    name: string,
    version: string
  ): UpdatesGetFiles;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/providers/\{provider\}/names/\{name\}/versions/\{version\}/files/\{fileId\}' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}/files/{fileId}",
    instanceId: string,
    provider: string,
    name: string,
    version: string,
    fileId: string
  ): UpdatesGetFile;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/operations' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/operations",
    instanceId: string
  ): UpdatesGetOperations;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/updates/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/updates/operations/{operationId}",
    instanceId: string,
    operationId: string
  ): UpdatesGetOperation;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deviceclasses' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deviceclasses",
    instanceId: string
  ): DevicesGetAllDeviceClasses;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deviceclasses/\{deviceClassId\}' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deviceclasses/{deviceClassId}",
    instanceId: string,
    deviceClassId: string
  ): DevicesGetDeviceClass;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deviceclasses/\{deviceClassId\}/deviceids' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deviceclasses/{deviceClassId}/deviceids",
    instanceId: string,
    deviceClassId: string
  ): DevicesGetDeviceClassDeviceIds;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deviceclasses/\{deviceClassId\}/installableupdates' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deviceclasses/{deviceClassId}/installableupdates",
    instanceId: string,
    deviceClassId: string
  ): DevicesGetDeviceClassInstallableUpdates;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/devices' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/devices",
    instanceId: string
  ): DevicesGetAllDevices;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/devices/\{deviceId\}' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/devices/{deviceId}",
    instanceId: string,
    deviceId: string
  ): DevicesGetDevice;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/updatecompliance' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/updatecompliance",
    instanceId: string
  ): DevicesGetUpdateCompliance;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/devicetags' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/devicetags",
    instanceId: string
  ): DevicesGetAllDeviceTags;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/devicetags/\{tagName\}' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/devicetags/{tagName}",
    instanceId: string,
    tagName: string
  ): DevicesGetDeviceTag;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/groups' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/groups",
    instanceId: string
  ): DevicesGetAllGroups;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/groups/\{groupId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/deviceupdate/{instanceId}/v2/management/groups/{groupId}",
    instanceId: string,
    groupId: string
  ): DevicesGetGroup;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/groups/\{groupId\}/updateCompliance' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/groups/{groupId}/updateCompliance",
    instanceId: string,
    groupId: string
  ): DevicesGetGroupUpdateCompliance;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/groups/\{groupId\}/bestUpdates' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/groups/{groupId}/bestUpdates",
    instanceId: string,
    groupId: string
  ): DevicesGetGroupBestUpdates;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deployments' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deployments",
    instanceId: string
  ): DeploymentsGetAllDeployments;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deployments/\{deploymentId\}' has methods for the following verbs: get, put, delete, post */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}",
    instanceId: string,
    deploymentId: string
  ): DeploymentsGetDeployment;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deployments/\{deploymentId\}/status' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}/status",
    instanceId: string,
    deploymentId: string
  ): DeploymentsGetDeploymentStatus;
  /** Resource for '/deviceupdate/\{instanceId\}/v2/management/deployments/\{deploymentId\}/devicestates' has methods for the following verbs: get */
  (
    path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}/devicestates",
    instanceId: string,
    deploymentId: string
  ): DeploymentsGetDeploymentDevices;
}

export type DeviceUpdateClient = Client & {
  path: Routes;
};
