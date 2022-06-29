// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  UpdateOutput,
  PageableListOfStringsOutput,
  FileOutput,
  PageableListOfOperationsOutput,
  OperationOutput,
  PageableListOfDeviceClassesOutput,
  DeviceClassOutput,
  PageableListOfUpdateIdsOutput,
  PageableListOfDevicesOutput,
  DeviceOutput,
  UpdateComplianceOutput,
  PageableListOfDeviceTagsOutput,
  DeviceTagOutput,
  PageableListOfGroupsOutput,
  GroupOutput,
  PageableListOfUpdatableDevicesOutput,
  PageableListOfDeploymentsOutput,
  DeploymentOutput,
  DeploymentStatusOutput,
  PageableListOfDeploymentDeviceStatesOutput
} from "./outputModels";

export interface UpdatesImportUpdate202Headers {
  /** Url to retrieve the import operation status. */
  location?: string;
  /** Url to retrieve the import operation status. */
  "operation-location"?: string;
}

/** Import new update version. */
export interface UpdatesImportUpdate202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & UpdatesImportUpdate202Headers;
}

/** Import new update version. */
export interface UpdatesImportUpdate429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a specific update version. */
export interface UpdatesGetUpdate200Response extends HttpResponse {
  status: "200";
  body: UpdateOutput;
}

/** Get a specific update version. */
export interface UpdatesGetUpdate304Response extends HttpResponse {
  status: "304";
  body: Record<string, unknown>;
}

/** Get a specific update version. */
export interface UpdatesGetUpdate404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Get a specific update version. */
export interface UpdatesGetUpdate429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

export interface UpdatesDeleteUpdate202Headers {
  /** Url to retrieve the operation status */
  location?: string;
  /** Url to retrieve the operation status */
  "operation-location"?: string;
}

/** Delete a specific update version. */
export interface UpdatesDeleteUpdate202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & UpdatesDeleteUpdate202Headers;
}

/** Delete a specific update version. */
export interface UpdatesDeleteUpdate429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a list of all update providers that have been imported to Device Update for IoT Hub. */
export interface UpdatesGetProviders200Response extends HttpResponse {
  status: "200";
  body: PageableListOfStringsOutput;
}

/** Get a list of all update providers that have been imported to Device Update for IoT Hub. */
export interface UpdatesGetProviders429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a list of all update names that match the specified provider. */
export interface UpdatesGetNames200Response extends HttpResponse {
  status: "200";
  body: PageableListOfStringsOutput;
}

/** Get a list of all update names that match the specified provider. */
export interface UpdatesGetNames404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Get a list of all update names that match the specified provider. */
export interface UpdatesGetNames429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a list of all update versions that match the specified provider and name. */
export interface UpdatesGetVersions200Response extends HttpResponse {
  status: "200";
  body: PageableListOfStringsOutput;
}

/** Get a list of all update versions that match the specified provider and name. */
export interface UpdatesGetVersions404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Get a list of all update versions that match the specified provider and name. */
export interface UpdatesGetVersions429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a list of all update file identifiers for the specified version. */
export interface UpdatesGetFiles200Response extends HttpResponse {
  status: "200";
  body: PageableListOfStringsOutput;
}

/** Get a list of all update file identifiers for the specified version. */
export interface UpdatesGetFiles404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Get a list of all update file identifiers for the specified version. */
export interface UpdatesGetFiles429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a specific update file from the version. */
export interface UpdatesGetFile200Response extends HttpResponse {
  status: "200";
  body: FileOutput;
}

/** Get a specific update file from the version. */
export interface UpdatesGetFile304Response extends HttpResponse {
  status: "304";
  body: Record<string, unknown>;
}

/** Get a specific update file from the version. */
export interface UpdatesGetFile404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Get a specific update file from the version. */
export interface UpdatesGetFile429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Get a list of all import update operations. Completed operations are kept for 7 days before auto-deleted. Delete operations are not returned by this API version. */
export interface UpdatesGetOperations200Response extends HttpResponse {
  status: "200";
  body: PageableListOfOperationsOutput;
}

/** Get a list of all import update operations. Completed operations are kept for 7 days before auto-deleted. Delete operations are not returned by this API version. */
export interface UpdatesGetOperations429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

export interface UpdatesGetOperation200Headers {
  /** Number of seconds to wait before checking the operation status again. */
  "retry-after"?: string;
}

/** Retrieve operation status. */
export interface UpdatesGetOperation200Response extends HttpResponse {
  status: "200";
  body: OperationOutput;
  headers: RawHttpHeaders & UpdatesGetOperation200Headers;
}

/** Retrieve operation status. */
export interface UpdatesGetOperation304Response extends HttpResponse {
  status: "304";
  body: Record<string, unknown>;
}

/** Retrieve operation status. */
export interface UpdatesGetOperation404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Retrieve operation status. */
export interface UpdatesGetOperation429Response extends HttpResponse {
  status: "429";
  body: Record<string, unknown>;
}

/** Gets a list of all device classes (unique combinations of device manufacturer and model) for all devices connected to Device Update for IoT Hub. */
export interface DevicesGetAllDeviceClasses200Response extends HttpResponse {
  status: "200";
  body: PageableListOfDeviceClassesOutput;
}

/** Gets the properties of a device class. */
export interface DevicesGetDeviceClass200Response extends HttpResponse {
  status: "200";
  body: DeviceClassOutput;
}

/** Gets the properties of a device class. */
export interface DevicesGetDeviceClass404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets a list of device identifiers in a device class. */
export interface DevicesGetDeviceClassDeviceIds200Response
  extends HttpResponse {
  status: "200";
  body: PageableListOfStringsOutput;
}

/** Gets a list of device identifiers in a device class. */
export interface DevicesGetDeviceClassDeviceIds404Response
  extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets a list of installable updates for a device class. */
export interface DevicesGetDeviceClassInstallableUpdates200Response
  extends HttpResponse {
  status: "200";
  body: PageableListOfUpdateIdsOutput;
}

/** Gets a list of installable updates for a device class. */
export interface DevicesGetDeviceClassInstallableUpdates404Response
  extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets a list of devices connected to Device Update for IoT Hub. */
export interface DevicesGetAllDevices200Response extends HttpResponse {
  status: "200";
  body: PageableListOfDevicesOutput;
}

/** Gets the device properties and latest deployment status for a device connected to Device Update for IoT Hub. */
export interface DevicesGetDevice200Response extends HttpResponse {
  status: "200";
  body: DeviceOutput;
}

/** Gets the device properties and latest deployment status for a device connected to Device Update for IoT Hub. */
export interface DevicesGetDevice404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets the breakdown of how many devices are on their latest update, have new updates available, or are in progress receiving new updates. */
export interface DevicesGetUpdateCompliance200Response extends HttpResponse {
  status: "200";
  body: UpdateComplianceOutput;
}

/** Gets a list of available group device tags for all devices connected to Device Update for IoT Hub. */
export interface DevicesGetAllDeviceTags200Response extends HttpResponse {
  status: "200";
  body: PageableListOfDeviceTagsOutput;
}

/** Gets a count of how many devices have a device tag. */
export interface DevicesGetDeviceTag200Response extends HttpResponse {
  status: "200";
  body: DeviceTagOutput;
}

/** Gets a count of how many devices have a device tag. */
export interface DevicesGetDeviceTag404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets a list of all device groups. */
export interface DevicesGetAllGroups200Response extends HttpResponse {
  status: "200";
  body: PageableListOfGroupsOutput;
}

/** Gets the properties of a group. */
export interface DevicesGetGroup200Response extends HttpResponse {
  status: "200";
  body: GroupOutput;
}

/** Gets the properties of a group. */
export interface DevicesGetGroup404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Create or update a device group. */
export interface DevicesCreateOrUpdateGroup200Response extends HttpResponse {
  status: "200";
  body: GroupOutput;
}

/** Create or update a device group. */
export interface DevicesCreateOrUpdateGroup400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Create or update a device group. */
export interface DevicesCreateOrUpdateGroup404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Deletes a device group. */
export interface DevicesDeleteGroup200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Deletes a device group. */
export interface DevicesDeleteGroup204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Get group update compliance information such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update. */
export interface DevicesGetGroupUpdateCompliance200Response
  extends HttpResponse {
  status: "200";
  body: UpdateComplianceOutput;
}

/** Get group update compliance information such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update. */
export interface DevicesGetGroupUpdateCompliance404Response
  extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Get the best available updates for a group and a count of how many devices need each update. */
export interface DevicesGetGroupBestUpdates200Response extends HttpResponse {
  status: "200";
  body: PageableListOfUpdatableDevicesOutput;
}

/** Get the best available updates for a group and a count of how many devices need each update. */
export interface DevicesGetGroupBestUpdates404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets a list of deployments. */
export interface DeploymentsGetAllDeployments200Response extends HttpResponse {
  status: "200";
  body: PageableListOfDeploymentsOutput;
}

/** Gets the properties of a deployment. */
export interface DeploymentsGetDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

/** Gets the properties of a deployment. */
export interface DeploymentsGetDeployment404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Creates or updates a deployment. */
export interface DeploymentsCreateOrUpdateDeployment200Response
  extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

/** Creates or updates a deployment. */
export interface DeploymentsCreateOrUpdateDeployment404Response
  extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Deletes a deployment. */
export interface DeploymentsDeleteDeployment200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Deletes a deployment. */
export interface DeploymentsDeleteDeployment404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets the status of a deployment including a breakdown of how many devices in the deployment are in progress, completed, or failed. */
export interface DeploymentsGetDeploymentStatus200Response
  extends HttpResponse {
  status: "200";
  body: DeploymentStatusOutput;
}

/** Gets the status of a deployment including a breakdown of how many devices in the deployment are in progress, completed, or failed. */
export interface DeploymentsGetDeploymentStatus404Response
  extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Gets a list of devices in a deployment along with their state. Useful for getting a list of failed devices. */
export interface DeploymentsGetDeploymentDevices200Response
  extends HttpResponse {
  status: "200";
  body: PageableListOfDeploymentDeviceStatesOutput;
}

/** Gets a list of devices in a deployment along with their state. Useful for getting a list of failed devices. */
export interface DeploymentsGetDeploymentDevices404Response
  extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Cancels a deployment. */
export interface DeploymentsCancelDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

/** Cancels a deployment. */
export interface DeploymentsCancelDeployment404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}

/** Retries a deployment with failed devices. */
export interface DeploymentsRetryDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

/** Retries a deployment with failed devices. */
export interface DeploymentsRetryDeployment404Response extends HttpResponse {
  status: "404";
  body: Record<string, unknown>;
}
