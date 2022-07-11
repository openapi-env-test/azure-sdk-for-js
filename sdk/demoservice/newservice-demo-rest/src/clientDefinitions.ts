// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DeviceUpdateListUpdatesParameters,
  DeviceUpdateImportUpdateParameters,
  DeviceUpdateGetUpdateParameters,
  DeviceUpdateDeleteUpdateParameters,
  DeviceUpdateListProvidersParameters,
  DeviceUpdateListNamesParameters,
  DeviceUpdateListVersionsParameters,
  DeviceUpdateListFilesParameters,
  DeviceUpdateGetFileParameters,
  DeviceUpdateListOperationsParameters,
  DeviceUpdateGetOperationParameters,
  DeviceManagementListDeviceClassesParameters,
  DeviceManagementGetDeviceClassParameters,
  DeviceManagementUpdateDeviceClassParameters,
  DeviceManagementDeleteDeviceClassParameters,
  DeviceManagementListInstallableUpdatesForDeviceClassParameters,
  DeviceManagementListDevicesParameters,
  DeviceManagementImportDevicesParameters,
  DeviceManagementGetDeviceParameters,
  DeviceManagementGetDeviceModuleParameters,
  DeviceManagementGetUpdateComplianceParameters,
  DeviceManagementListGroupsParameters,
  DeviceManagementGetGroupParameters,
  DeviceManagementDeleteGroupParameters,
  DeviceManagementGetGroupUpdateComplianceParameters,
  DeviceManagementListBestUpdatesForGroupParameters,
  DeviceManagementListDeploymentsForGroupParameters,
  DeviceManagementGetDeploymentParameters,
  DeviceManagementCreateOrUpdateDeploymentParameters,
  DeviceManagementDeleteDeploymentParameters,
  DeviceManagementGetDeploymentStatusParameters,
  DeviceManagementListDeviceClassSubgroupsForGroupParameters,
  DeviceManagementGetDeviceClassSubgroupDetailsParameters,
  DeviceManagementDeleteDeviceClassSubgroupParameters,
  DeviceManagementGetDeviceClassSubgroupUpdateComplianceParameters,
  DeviceManagementListBestUpdatesForDeviceClassSubgroupParameters,
  DeviceManagementListDeploymentsForDeviceClassSubgroupParameters,
  DeviceManagementGetDeploymentForDeviceClassSubgroupParameters,
  DeviceManagementDeleteDeviceClassSubgroupDeploymentParameters,
  DeviceManagementStopDeploymentParameters,
  DeviceManagementRetryDeploymentParameters,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatusParameters,
  DeviceManagementListDevicesForDeviceClassSubgroupDeploymentParameters,
  DeviceManagementGetOperationParameters,
  DeviceManagementListOperationsParameters,
  DeviceManagementCollectLogsParameters,
  DeviceManagementGetLogCollectionOperationParameters,
  DeviceManagementListLogCollectionOperationsParameters,
  DeviceManagementGetLogCollectionOperationDetailedStatusParameters,
  DeviceManagementListDeviceHealthParameters
} from "./parameters";
import {
  DeviceUpdateListUpdates200Response,
  DeviceUpdateListUpdatesdefaultResponse,
  DeviceUpdateImportUpdate202Response,
  DeviceUpdateImportUpdatedefaultResponse,
  DeviceUpdateGetUpdate200Response,
  DeviceUpdateGetUpdate304Response,
  DeviceUpdateGetUpdatedefaultResponse,
  DeviceUpdateDeleteUpdate202Response,
  DeviceUpdateDeleteUpdatedefaultResponse,
  DeviceUpdateListProviders200Response,
  DeviceUpdateListProvidersdefaultResponse,
  DeviceUpdateListNames200Response,
  DeviceUpdateListNamesdefaultResponse,
  DeviceUpdateListVersions200Response,
  DeviceUpdateListVersionsdefaultResponse,
  DeviceUpdateListFiles200Response,
  DeviceUpdateListFilesdefaultResponse,
  DeviceUpdateGetFile200Response,
  DeviceUpdateGetFile304Response,
  DeviceUpdateGetFiledefaultResponse,
  DeviceUpdateListOperations200Response,
  DeviceUpdateListOperationsdefaultResponse,
  DeviceUpdateGetOperation200Response,
  DeviceUpdateGetOperation304Response,
  DeviceUpdateGetOperationdefaultResponse,
  DeviceManagementListDeviceClasses200Response,
  DeviceManagementListDeviceClassesdefaultResponse,
  DeviceManagementGetDeviceClass200Response,
  DeviceManagementGetDeviceClassdefaultResponse,
  DeviceManagementUpdateDeviceClass200Response,
  DeviceManagementUpdateDeviceClassdefaultResponse,
  DeviceManagementDeleteDeviceClass204Response,
  DeviceManagementDeleteDeviceClassdefaultResponse,
  DeviceManagementListInstallableUpdatesForDeviceClass200Response,
  DeviceManagementListInstallableUpdatesForDeviceClassdefaultResponse,
  DeviceManagementListDevices200Response,
  DeviceManagementListDevicesdefaultResponse,
  DeviceManagementImportDevices202Response,
  DeviceManagementImportDevicesdefaultResponse,
  DeviceManagementGetDevice200Response,
  DeviceManagementGetDevicedefaultResponse,
  DeviceManagementGetDeviceModule200Response,
  DeviceManagementGetDeviceModuledefaultResponse,
  DeviceManagementGetUpdateCompliance200Response,
  DeviceManagementGetUpdateCompliancedefaultResponse,
  DeviceManagementListGroups200Response,
  DeviceManagementListGroupsdefaultResponse,
  DeviceManagementGetGroup200Response,
  DeviceManagementGetGroupdefaultResponse,
  DeviceManagementDeleteGroup204Response,
  DeviceManagementDeleteGroupdefaultResponse,
  DeviceManagementGetGroupUpdateCompliance200Response,
  DeviceManagementGetGroupUpdateCompliancedefaultResponse,
  DeviceManagementListBestUpdatesForGroup200Response,
  DeviceManagementListBestUpdatesForGroupdefaultResponse,
  DeviceManagementListDeploymentsForGroup200Response,
  DeviceManagementListDeploymentsForGroupdefaultResponse,
  DeviceManagementGetDeployment200Response,
  DeviceManagementGetDeploymentdefaultResponse,
  DeviceManagementCreateOrUpdateDeployment200Response,
  DeviceManagementCreateOrUpdateDeploymentdefaultResponse,
  DeviceManagementDeleteDeployment204Response,
  DeviceManagementDeleteDeploymentdefaultResponse,
  DeviceManagementGetDeploymentStatus200Response,
  DeviceManagementGetDeploymentStatusdefaultResponse,
  DeviceManagementListDeviceClassSubgroupsForGroup200Response,
  DeviceManagementListDeviceClassSubgroupsForGroupdefaultResponse,
  DeviceManagementGetDeviceClassSubgroupDetails200Response,
  DeviceManagementGetDeviceClassSubgroupDetailsdefaultResponse,
  DeviceManagementDeleteDeviceClassSubgroup204Response,
  DeviceManagementDeleteDeviceClassSubgroupdefaultResponse,
  DeviceManagementGetDeviceClassSubgroupUpdateCompliance200Response,
  DeviceManagementGetDeviceClassSubgroupUpdateCompliancedefaultResponse,
  DeviceManagementListBestUpdatesForDeviceClassSubgroup200Response,
  DeviceManagementListBestUpdatesForDeviceClassSubgroupdefaultResponse,
  DeviceManagementListDeploymentsForDeviceClassSubgroup200Response,
  DeviceManagementListDeploymentsForDeviceClassSubgroupdefaultResponse,
  DeviceManagementGetDeploymentForDeviceClassSubgroup200Response,
  DeviceManagementGetDeploymentForDeviceClassSubgroupdefaultResponse,
  DeviceManagementDeleteDeviceClassSubgroupDeployment204Response,
  DeviceManagementDeleteDeviceClassSubgroupDeploymentdefaultResponse,
  DeviceManagementStopDeployment200Response,
  DeviceManagementStopDeploymentdefaultResponse,
  DeviceManagementRetryDeployment200Response,
  DeviceManagementRetryDeploymentdefaultResponse,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatus200Response,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatusdefaultResponse,
  DeviceManagementListDevicesForDeviceClassSubgroupDeployment200Response,
  DeviceManagementListDevicesForDeviceClassSubgroupDeploymentdefaultResponse,
  DeviceManagementGetOperation200Response,
  DeviceManagementGetOperation304Response,
  DeviceManagementGetOperationdefaultResponse,
  DeviceManagementListOperations200Response,
  DeviceManagementListOperationsdefaultResponse,
  DeviceManagementCollectLogs201Response,
  DeviceManagementCollectLogsdefaultResponse,
  DeviceManagementGetLogCollectionOperation200Response,
  DeviceManagementGetLogCollectionOperationdefaultResponse,
  DeviceManagementListLogCollectionOperations200Response,
  DeviceManagementListLogCollectionOperationsdefaultResponse,
  DeviceManagementGetLogCollectionOperationDetailedStatus200Response,
  DeviceManagementGetLogCollectionOperationDetailedStatusdefaultResponse,
  DeviceManagementListDeviceHealth200Response,
  DeviceManagementListDeviceHealthdefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface DeviceUpdateListUpdates {
  /** Get a list of all updates that have been imported to Device Update for IoT Hub. */
  get(
    options?: DeviceUpdateListUpdatesParameters
  ): StreamableMethod<
    DeviceUpdateListUpdates200Response | DeviceUpdateListUpdatesdefaultResponse
  >;
}

export interface DeviceUpdateImportUpdate {
  /** Import new update version. This is a long-running-operation; use Operation-Location response header value to check for operation status. */
  post(
    options: DeviceUpdateImportUpdateParameters
  ): StreamableMethod<
    | DeviceUpdateImportUpdate202Response
    | DeviceUpdateImportUpdatedefaultResponse
  >;
}

export interface DeviceUpdateGetUpdate {
  /** Get a specific update version. */
  get(
    options?: DeviceUpdateGetUpdateParameters
  ): StreamableMethod<
    | DeviceUpdateGetUpdate200Response
    | DeviceUpdateGetUpdate304Response
    | DeviceUpdateGetUpdatedefaultResponse
  >;
  /** Delete a specific update version. This is a long-running-operation; use Operation-Location response header value to check for operation status. */
  delete(
    options?: DeviceUpdateDeleteUpdateParameters
  ): StreamableMethod<
    | DeviceUpdateDeleteUpdate202Response
    | DeviceUpdateDeleteUpdatedefaultResponse
  >;
}

export interface DeviceUpdateListProviders {
  /** Get a list of all update providers that have been imported to Device Update for IoT Hub. */
  get(
    options?: DeviceUpdateListProvidersParameters
  ): StreamableMethod<
    | DeviceUpdateListProviders200Response
    | DeviceUpdateListProvidersdefaultResponse
  >;
}

export interface DeviceUpdateListNames {
  /** Get a list of all update names that match the specified provider. */
  get(
    options?: DeviceUpdateListNamesParameters
  ): StreamableMethod<
    DeviceUpdateListNames200Response | DeviceUpdateListNamesdefaultResponse
  >;
}

export interface DeviceUpdateListVersions {
  /** Get a list of all update versions that match the specified provider and name. */
  get(
    options?: DeviceUpdateListVersionsParameters
  ): StreamableMethod<
    | DeviceUpdateListVersions200Response
    | DeviceUpdateListVersionsdefaultResponse
  >;
}

export interface DeviceUpdateListFiles {
  /** Get a list of all update file identifiers for the specified version. */
  get(
    options?: DeviceUpdateListFilesParameters
  ): StreamableMethod<
    DeviceUpdateListFiles200Response | DeviceUpdateListFilesdefaultResponse
  >;
}

export interface DeviceUpdateGetFile {
  /** Get a specific update file from the version. */
  get(
    options?: DeviceUpdateGetFileParameters
  ): StreamableMethod<
    | DeviceUpdateGetFile200Response
    | DeviceUpdateGetFile304Response
    | DeviceUpdateGetFiledefaultResponse
  >;
}

export interface DeviceUpdateListOperations {
  /** Get a list of all import update operations. Completed operations are kept for 7 days before auto-deleted. Delete operations are not returned by this API version. */
  get(
    options?: DeviceUpdateListOperationsParameters
  ): StreamableMethod<
    | DeviceUpdateListOperations200Response
    | DeviceUpdateListOperationsdefaultResponse
  >;
}

export interface DeviceUpdateGetOperation {
  /** Retrieve operation status. */
  get(
    options?: DeviceUpdateGetOperationParameters
  ): StreamableMethod<
    | DeviceUpdateGetOperation200Response
    | DeviceUpdateGetOperation304Response
    | DeviceUpdateGetOperationdefaultResponse
  >;
}

export interface DeviceManagementListDeviceClasses {
  /** Gets a list of all device classes (unique combinations of device manufacturer and model) for all devices connected to Device Update for IoT Hub. */
  get(
    options?: DeviceManagementListDeviceClassesParameters
  ): StreamableMethod<
    | DeviceManagementListDeviceClasses200Response
    | DeviceManagementListDeviceClassesdefaultResponse
  >;
}

export interface DeviceManagementGetDeviceClass {
  /** Gets the properties of a device class. */
  get(
    options?: DeviceManagementGetDeviceClassParameters
  ): StreamableMethod<
    | DeviceManagementGetDeviceClass200Response
    | DeviceManagementGetDeviceClassdefaultResponse
  >;
  /** Update device class details. */
  patch(
    options: DeviceManagementUpdateDeviceClassParameters
  ): StreamableMethod<
    | DeviceManagementUpdateDeviceClass200Response
    | DeviceManagementUpdateDeviceClassdefaultResponse
  >;
  /** Deletes a device class. */
  delete(
    options?: DeviceManagementDeleteDeviceClassParameters
  ): StreamableMethod<
    | DeviceManagementDeleteDeviceClass204Response
    | DeviceManagementDeleteDeviceClassdefaultResponse
  >;
}

export interface DeviceManagementListInstallableUpdatesForDeviceClass {
  /** Gets a list of installable updates for a device class. */
  get(
    options?: DeviceManagementListInstallableUpdatesForDeviceClassParameters
  ): StreamableMethod<
    | DeviceManagementListInstallableUpdatesForDeviceClass200Response
    | DeviceManagementListInstallableUpdatesForDeviceClassdefaultResponse
  >;
}

export interface DeviceManagementListDevices {
  /** Gets a list of devices connected to Device Update for IoT Hub. */
  get(
    options?: DeviceManagementListDevicesParameters
  ): StreamableMethod<
    | DeviceManagementListDevices200Response
    | DeviceManagementListDevicesdefaultResponse
  >;
}

export interface DeviceManagementImportDevices {
  /** Import existing devices from IoT Hub. This is a long-running-operation; use Operation-Location response header value to check for operation status. */
  post(
    options: DeviceManagementImportDevicesParameters
  ): StreamableMethod<
    | DeviceManagementImportDevices202Response
    | DeviceManagementImportDevicesdefaultResponse
  >;
}

export interface DeviceManagementGetDevice {
  /** Gets the device properties and latest deployment status for a device connected to Device Update for IoT Hub. */
  get(
    options?: DeviceManagementGetDeviceParameters
  ): StreamableMethod<
    | DeviceManagementGetDevice200Response
    | DeviceManagementGetDevicedefaultResponse
  >;
}

export interface DeviceManagementGetDeviceModule {
  /** Gets the device module properties and latest deployment status for a device module connected to Device Update for IoT Hub. */
  get(
    options?: DeviceManagementGetDeviceModuleParameters
  ): StreamableMethod<
    | DeviceManagementGetDeviceModule200Response
    | DeviceManagementGetDeviceModuledefaultResponse
  >;
}

export interface DeviceManagementGetUpdateCompliance {
  /** Gets the breakdown of how many devices are on their latest update, have new updates available, or are in progress receiving new updates. */
  get(
    options?: DeviceManagementGetUpdateComplianceParameters
  ): StreamableMethod<
    | DeviceManagementGetUpdateCompliance200Response
    | DeviceManagementGetUpdateCompliancedefaultResponse
  >;
}

export interface DeviceManagementListGroups {
  /** Gets a list of all device groups.  The $default group will always be returned first. */
  get(
    options?: DeviceManagementListGroupsParameters
  ): StreamableMethod<
    | DeviceManagementListGroups200Response
    | DeviceManagementListGroupsdefaultResponse
  >;
}

export interface DeviceManagementGetGroup {
  /** Gets the device group properties. */
  get(
    options?: DeviceManagementGetGroupParameters
  ): StreamableMethod<
    | DeviceManagementGetGroup200Response
    | DeviceManagementGetGroupdefaultResponse
  >;
  /** Deletes a device group. */
  delete(
    options?: DeviceManagementDeleteGroupParameters
  ): StreamableMethod<
    | DeviceManagementDeleteGroup204Response
    | DeviceManagementDeleteGroupdefaultResponse
  >;
}

export interface DeviceManagementGetGroupUpdateCompliance {
  /** Get device group update compliance information such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update. */
  get(
    options?: DeviceManagementGetGroupUpdateComplianceParameters
  ): StreamableMethod<
    | DeviceManagementGetGroupUpdateCompliance200Response
    | DeviceManagementGetGroupUpdateCompliancedefaultResponse
  >;
}

export interface DeviceManagementListBestUpdatesForGroup {
  /** Get the best available updates for a device group and a count of how many devices need each update. */
  get(
    options?: DeviceManagementListBestUpdatesForGroupParameters
  ): StreamableMethod<
    | DeviceManagementListBestUpdatesForGroup200Response
    | DeviceManagementListBestUpdatesForGroupdefaultResponse
  >;
}

export interface DeviceManagementListDeploymentsForGroup {
  /** Gets a list of deployments for a device group. */
  get(
    options?: DeviceManagementListDeploymentsForGroupParameters
  ): StreamableMethod<
    | DeviceManagementListDeploymentsForGroup200Response
    | DeviceManagementListDeploymentsForGroupdefaultResponse
  >;
}

export interface DeviceManagementGetDeployment {
  /** Gets the deployment properties. */
  get(
    options?: DeviceManagementGetDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementGetDeployment200Response
    | DeviceManagementGetDeploymentdefaultResponse
  >;
  /** Creates or updates a deployment. */
  put(
    options: DeviceManagementCreateOrUpdateDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementCreateOrUpdateDeployment200Response
    | DeviceManagementCreateOrUpdateDeploymentdefaultResponse
  >;
  /** Deletes a deployment. */
  delete(
    options?: DeviceManagementDeleteDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementDeleteDeployment204Response
    | DeviceManagementDeleteDeploymentdefaultResponse
  >;
}

export interface DeviceManagementGetDeploymentStatus {
  /** Gets the status of a deployment including a breakdown of how many devices in the deployment are in progress, completed, or failed. */
  get(
    options?: DeviceManagementGetDeploymentStatusParameters
  ): StreamableMethod<
    | DeviceManagementGetDeploymentStatus200Response
    | DeviceManagementGetDeploymentStatusdefaultResponse
  >;
}

export interface DeviceManagementListDeviceClassSubgroupsForGroup {
  /** Get the device class subgroups for the group. */
  get(
    options?: DeviceManagementListDeviceClassSubgroupsForGroupParameters
  ): StreamableMethod<
    | DeviceManagementListDeviceClassSubgroupsForGroup200Response
    | DeviceManagementListDeviceClassSubgroupsForGroupdefaultResponse
  >;
}

export interface DeviceManagementGetDeviceClassSubgroupDetails {
  /** Gets device class subgroup details. */
  get(
    options?: DeviceManagementGetDeviceClassSubgroupDetailsParameters
  ): StreamableMethod<
    | DeviceManagementGetDeviceClassSubgroupDetails200Response
    | DeviceManagementGetDeviceClassSubgroupDetailsdefaultResponse
  >;
  /** Deletes a device class subgroup. */
  delete(
    options?: DeviceManagementDeleteDeviceClassSubgroupParameters
  ): StreamableMethod<
    | DeviceManagementDeleteDeviceClassSubgroup204Response
    | DeviceManagementDeleteDeviceClassSubgroupdefaultResponse
  >;
}

export interface DeviceManagementGetDeviceClassSubgroupUpdateCompliance {
  /** Get device class subgroup update compliance information such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update. */
  get(
    options?: DeviceManagementGetDeviceClassSubgroupUpdateComplianceParameters
  ): StreamableMethod<
    | DeviceManagementGetDeviceClassSubgroupUpdateCompliance200Response
    | DeviceManagementGetDeviceClassSubgroupUpdateCompliancedefaultResponse
  >;
}

export interface DeviceManagementListBestUpdatesForDeviceClassSubgroup {
  /** Get the best available update for a device class subgroup and a count of how many devices need this update. */
  get(
    options?: DeviceManagementListBestUpdatesForDeviceClassSubgroupParameters
  ): StreamableMethod<
    | DeviceManagementListBestUpdatesForDeviceClassSubgroup200Response
    | DeviceManagementListBestUpdatesForDeviceClassSubgroupdefaultResponse
  >;
}

export interface DeviceManagementListDeploymentsForDeviceClassSubgroup {
  /** Gets a list of deployments for a device class subgroup. */
  get(
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupParameters
  ): StreamableMethod<
    | DeviceManagementListDeploymentsForDeviceClassSubgroup200Response
    | DeviceManagementListDeploymentsForDeviceClassSubgroupdefaultResponse
  >;
}

export interface DeviceManagementGetDeploymentForDeviceClassSubgroup {
  /** Gets the deployment properties. */
  get(
    options?: DeviceManagementGetDeploymentForDeviceClassSubgroupParameters
  ): StreamableMethod<
    | DeviceManagementGetDeploymentForDeviceClassSubgroup200Response
    | DeviceManagementGetDeploymentForDeviceClassSubgroupdefaultResponse
  >;
  /** Deletes a device class subgroup deployment. */
  delete(
    options?: DeviceManagementDeleteDeviceClassSubgroupDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementDeleteDeviceClassSubgroupDeployment204Response
    | DeviceManagementDeleteDeviceClassSubgroupDeploymentdefaultResponse
  >;
}

export interface DeviceManagementStopDeployment {
  /** Stops a deployment. */
  post(
    options?: DeviceManagementStopDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementStopDeployment200Response
    | DeviceManagementStopDeploymentdefaultResponse
  >;
}

export interface DeviceManagementRetryDeployment {
  /** Retries a deployment with failed devices. */
  post(
    options?: DeviceManagementRetryDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementRetryDeployment200Response
    | DeviceManagementRetryDeploymentdefaultResponse
  >;
}

export interface DeviceManagementGetDeviceClassSubgroupDeploymentStatus {
  /** Gets the status of a deployment including a breakdown of how many devices in the deployment are in progress, completed, or failed. */
  get(
    options?: DeviceManagementGetDeviceClassSubgroupDeploymentStatusParameters
  ): StreamableMethod<
    | DeviceManagementGetDeviceClassSubgroupDeploymentStatus200Response
    | DeviceManagementGetDeviceClassSubgroupDeploymentStatusdefaultResponse
  >;
}

export interface DeviceManagementListDevicesForDeviceClassSubgroupDeployment {
  /** Gets a list of devices in a deployment along with their state. Useful for getting a list of failed devices. */
  get(
    options?: DeviceManagementListDevicesForDeviceClassSubgroupDeploymentParameters
  ): StreamableMethod<
    | DeviceManagementListDevicesForDeviceClassSubgroupDeployment200Response
    | DeviceManagementListDevicesForDeviceClassSubgroupDeploymentdefaultResponse
  >;
}

export interface DeviceManagementGetOperation {
  /** Retrieve operation status. */
  get(
    options?: DeviceManagementGetOperationParameters
  ): StreamableMethod<
    | DeviceManagementGetOperation200Response
    | DeviceManagementGetOperation304Response
    | DeviceManagementGetOperationdefaultResponse
  >;
}

export interface DeviceManagementListOperations {
  /** Get a list of all device import operations. Completed operations are kept for 7 days before auto-deleted. */
  get(
    options?: DeviceManagementListOperationsParameters
  ): StreamableMethod<
    | DeviceManagementListOperations200Response
    | DeviceManagementListOperationsdefaultResponse
  >;
}

export interface DeviceManagementCollectLogs {
  /** Start the device diagnostics log collection operation on specified devices. */
  put(
    options: DeviceManagementCollectLogsParameters
  ): StreamableMethod<
    | DeviceManagementCollectLogs201Response
    | DeviceManagementCollectLogsdefaultResponse
  >;
  /** Get the device diagnostics log collection operation */
  get(
    options?: DeviceManagementGetLogCollectionOperationParameters
  ): StreamableMethod<
    | DeviceManagementGetLogCollectionOperation200Response
    | DeviceManagementGetLogCollectionOperationdefaultResponse
  >;
}

export interface DeviceManagementListLogCollectionOperations {
  /** Get all device diagnostics log collection operations */
  get(
    options?: DeviceManagementListLogCollectionOperationsParameters
  ): StreamableMethod<
    | DeviceManagementListLogCollectionOperations200Response
    | DeviceManagementListLogCollectionOperationsdefaultResponse
  >;
}

export interface DeviceManagementGetLogCollectionOperationDetailedStatus {
  /** Get device diagnostics log collection operation with detailed status */
  get(
    options?: DeviceManagementGetLogCollectionOperationDetailedStatusParameters
  ): StreamableMethod<
    | DeviceManagementGetLogCollectionOperationDetailedStatus200Response
    | DeviceManagementGetLogCollectionOperationDetailedStatusdefaultResponse
  >;
}

export interface DeviceManagementListDeviceHealth {
  /** Get list of device health */
  get(
    options: DeviceManagementListDeviceHealthParameters
  ): StreamableMethod<
    | DeviceManagementListDeviceHealth200Response
    | DeviceManagementListDeviceHealthdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/deviceUpdate/\{instanceId\}/updates' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates",
    instanceId: string
  ): DeviceUpdateListUpdates;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates:import' has methods for the following verbs: post */
  (
    path: "/deviceUpdate/{instanceId}/updates:import",
    instanceId: string
  ): DeviceUpdateImportUpdate;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/providers/\{provider\}/names/\{name\}/versions/\{version\}' has methods for the following verbs: get, delete */
  (
    path: "/deviceUpdate/{instanceId}/updates/providers/{provider}/names/{name}/versions/{version}",
    instanceId: string,
    provider: string,
    name: string,
    version: string
  ): DeviceUpdateGetUpdate;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/providers' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/providers",
    instanceId: string
  ): DeviceUpdateListProviders;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/providers/\{provider\}/names' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/providers/{provider}/names",
    instanceId: string,
    provider: string
  ): DeviceUpdateListNames;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/providers/\{provider\}/names/\{name\}/versions' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/providers/{provider}/names/{name}/versions",
    instanceId: string,
    provider: string,
    name: string
  ): DeviceUpdateListVersions;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/providers/\{provider\}/names/\{name\}/versions/\{version\}/files' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/providers/{provider}/names/{name}/versions/{version}/files",
    instanceId: string,
    provider: string,
    name: string,
    version: string
  ): DeviceUpdateListFiles;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/providers/\{provider\}/names/\{name\}/versions/\{version\}/files/\{fileId\}' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/providers/{provider}/names/{name}/versions/{version}/files/{fileId}",
    instanceId: string,
    provider: string,
    name: string,
    version: string,
    fileId: string
  ): DeviceUpdateGetFile;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/operations' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/operations",
    instanceId: string
  ): DeviceUpdateListOperations;
  /** Resource for '/deviceUpdate/\{instanceId\}/updates/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/updates/operations/{operationId}",
    instanceId: string,
    operationId: string
  ): DeviceUpdateGetOperation;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceClasses' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceClasses",
    instanceId: string
  ): DeviceManagementListDeviceClasses;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceClasses/\{deviceClassId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceClasses/{deviceClassId}",
    instanceId: string,
    deviceClassId: string
  ): DeviceManagementGetDeviceClass;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceClasses/\{deviceClassId\}/installableUpdates' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceClasses/{deviceClassId}/installableUpdates",
    instanceId: string,
    deviceClassId: string
  ): DeviceManagementListInstallableUpdatesForDeviceClass;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/devices' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/devices",
    instanceId: string
  ): DeviceManagementListDevices;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/devices:import' has methods for the following verbs: post */
  (
    path: "/deviceUpdate/{instanceId}/management/devices:import",
    instanceId: string
  ): DeviceManagementImportDevices;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/devices/\{deviceId\}' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/devices/{deviceId}",
    instanceId: string,
    deviceId: string
  ): DeviceManagementGetDevice;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/devices/\{deviceId\}/modules/\{moduleId\}' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/devices/{deviceId}/modules/{moduleId}",
    instanceId: string,
    deviceId: string,
    moduleId: string
  ): DeviceManagementGetDeviceModule;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/updateCompliance' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/updateCompliance",
    instanceId: string
  ): DeviceManagementGetUpdateCompliance;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups",
    instanceId: string
  ): DeviceManagementListGroups;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}' has methods for the following verbs: get, delete */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}",
    instanceId: string,
    groupId: string
  ): DeviceManagementGetGroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/updateCompliance' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/updateCompliance",
    instanceId: string,
    groupId: string
  ): DeviceManagementGetGroupUpdateCompliance;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/bestUpdates' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/bestUpdates",
    instanceId: string,
    groupId: string
  ): DeviceManagementListBestUpdatesForGroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deployments' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments",
    instanceId: string,
    groupId: string
  ): DeviceManagementListDeploymentsForGroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deployments/\{deploymentId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
    instanceId: string,
    groupId: string,
    deploymentId: string
  ): DeviceManagementGetDeployment;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deployments/\{deploymentId\}/status' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}/status",
    instanceId: string,
    groupId: string,
    deploymentId: string
  ): DeviceManagementGetDeploymentStatus;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups",
    instanceId: string,
    groupId: string
  ): DeviceManagementListDeviceClassSubgroupsForGroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}' has methods for the following verbs: get, delete */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}",
    instanceId: string,
    groupId: string,
    deviceClassId: string
  ): DeviceManagementGetDeviceClassSubgroupDetails;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/updateCompliance' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/updateCompliance",
    instanceId: string,
    groupId: string,
    deviceClassId: string
  ): DeviceManagementGetDeviceClassSubgroupUpdateCompliance;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/bestUpdates' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/bestUpdates",
    instanceId: string,
    groupId: string,
    deviceClassId: string
  ): DeviceManagementListBestUpdatesForDeviceClassSubgroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/deployments' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments",
    instanceId: string,
    groupId: string,
    deviceClassId: string
  ): DeviceManagementListDeploymentsForDeviceClassSubgroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/deployments/\{deploymentId\}' has methods for the following verbs: get, delete */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}",
    instanceId: string,
    groupId: string,
    deviceClassId: string,
    deploymentId: string
  ): DeviceManagementGetDeploymentForDeviceClassSubgroup;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/deployments/\{deploymentId\}:cancel' has methods for the following verbs: post */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}:cancel",
    instanceId: string,
    groupId: string,
    deviceClassId: string,
    deploymentId: string
  ): DeviceManagementStopDeployment;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/deployments/\{deploymentId\}:retry' has methods for the following verbs: post */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}:retry",
    instanceId: string,
    groupId: string,
    deviceClassId: string,
    deploymentId: string
  ): DeviceManagementRetryDeployment;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/deployments/\{deploymentId\}/status' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}/status",
    instanceId: string,
    groupId: string,
    deviceClassId: string,
    deploymentId: string
  ): DeviceManagementGetDeviceClassSubgroupDeploymentStatus;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/groups/\{groupId\}/deviceClassSubgroups/\{deviceClassId\}/deployments/\{deploymentId\}/devicestates' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}/devicestates",
    instanceId: string,
    groupId: string,
    deviceClassId: string,
    deploymentId: string
  ): DeviceManagementListDevicesForDeviceClassSubgroupDeployment;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/operations/{operationId}",
    instanceId: string,
    operationId: string
  ): DeviceManagementGetOperation;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/operations' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/operations",
    instanceId: string
  ): DeviceManagementListOperations;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceDiagnostics/logCollections/\{operationId\}' has methods for the following verbs: put, get */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}",
    instanceId: string,
    operationId: string
  ): DeviceManagementCollectLogs;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceDiagnostics/logCollections' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections",
    instanceId: string
  ): DeviceManagementListLogCollectionOperations;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceDiagnostics/logCollections/\{operationId\}/detailedStatus' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}/detailedStatus",
    instanceId: string,
    operationId: string
  ): DeviceManagementGetLogCollectionOperationDetailedStatus;
  /** Resource for '/deviceUpdate/\{instanceId\}/management/deviceDiagnostics/deviceHealth' has methods for the following verbs: get */
  (
    path: "/deviceUpdate/{instanceId}/management/deviceDiagnostics/deviceHealth",
    instanceId: string
  ): DeviceManagementListDeviceHealth;
}

export type DemoNewServiceClient = Client & {
  path: Routes;
};
