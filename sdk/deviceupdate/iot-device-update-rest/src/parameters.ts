// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { ImportUpdateInput, Group, Deployment } from "./models";

export interface UpdatesImportUpdateBodyParam {
  /** The update to be imported. */
  body: ImportUpdateInput;
}

export interface UpdatesImportUpdateQueryParamProperties {
  /** Import update action. */
  action: "import";
}

export interface UpdatesImportUpdateQueryParam {
  queryParameters: UpdatesImportUpdateQueryParamProperties;
}

export interface UpdatesImportUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type UpdatesImportUpdateParameters = UpdatesImportUpdateQueryParam &
  UpdatesImportUpdateMediaTypesParam &
  UpdatesImportUpdateBodyParam &
  RequestParameters;

export interface UpdatesGetUpdateHeaders {
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
}

export interface UpdatesGetUpdateHeaderParam {
  headers: RawHttpHeadersInput & UpdatesGetUpdateHeaders;
}

export type UpdatesGetUpdateParameters = UpdatesGetUpdateHeaderParam &
  RequestParameters;
export type UpdatesDeleteUpdateParameters = RequestParameters;
export type UpdatesGetProvidersParameters = RequestParameters;
export type UpdatesGetNamesParameters = RequestParameters;
export type UpdatesGetVersionsParameters = RequestParameters;
export type UpdatesGetFilesParameters = RequestParameters;

export interface UpdatesGetFileHeaders {
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
}

export interface UpdatesGetFileHeaderParam {
  headers: RawHttpHeadersInput & UpdatesGetFileHeaders;
}

export type UpdatesGetFileParameters = UpdatesGetFileHeaderParam &
  RequestParameters;

export interface UpdatesGetOperationsQueryParamProperties {
  /** Restricts the set of operations returned. Only one specific filter is supported: "status eq 'NotStarted' or status eq 'Running'" */
  $filter?: string;
  /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
  $top?: number;
}

export interface UpdatesGetOperationsQueryParam {
  queryParameters?: UpdatesGetOperationsQueryParamProperties;
}

export type UpdatesGetOperationsParameters = UpdatesGetOperationsQueryParam &
  RequestParameters;

export interface UpdatesGetOperationHeaders {
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
}

export interface UpdatesGetOperationHeaderParam {
  headers: RawHttpHeadersInput & UpdatesGetOperationHeaders;
}

export type UpdatesGetOperationParameters = UpdatesGetOperationHeaderParam &
  RequestParameters;
export type DevicesGetAllDeviceClassesParameters = RequestParameters;
export type DevicesGetDeviceClassParameters = RequestParameters;
export type DevicesGetDeviceClassDeviceIdsParameters = RequestParameters;
export type DevicesGetDeviceClassInstallableUpdatesParameters = RequestParameters;

export interface DevicesGetAllDevicesQueryParamProperties {
  /** Restricts the set of devices returned. You can only filter on device GroupId. */
  $filter?: string;
}

export interface DevicesGetAllDevicesQueryParam {
  queryParameters?: DevicesGetAllDevicesQueryParamProperties;
}

export type DevicesGetAllDevicesParameters = DevicesGetAllDevicesQueryParam &
  RequestParameters;
export type DevicesGetDeviceParameters = RequestParameters;
export type DevicesGetUpdateComplianceParameters = RequestParameters;
export type DevicesGetAllDeviceTagsParameters = RequestParameters;
export type DevicesGetDeviceTagParameters = RequestParameters;
export type DevicesGetAllGroupsParameters = RequestParameters;
export type DevicesGetGroupParameters = RequestParameters;

export interface DevicesCreateOrUpdateGroupBodyParam {
  /** The group properties. */
  body: Group;
}

export interface DevicesCreateOrUpdateGroupMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DevicesCreateOrUpdateGroupParameters = DevicesCreateOrUpdateGroupMediaTypesParam &
  DevicesCreateOrUpdateGroupBodyParam &
  RequestParameters;
export type DevicesDeleteGroupParameters = RequestParameters;
export type DevicesGetGroupUpdateComplianceParameters = RequestParameters;

export interface DevicesGetGroupBestUpdatesQueryParamProperties {
  /** Restricts the set of bestUpdates returned. You can filter on update Provider, Name and Version property. */
  $filter?: string;
}

export interface DevicesGetGroupBestUpdatesQueryParam {
  queryParameters?: DevicesGetGroupBestUpdatesQueryParamProperties;
}

export type DevicesGetGroupBestUpdatesParameters = DevicesGetGroupBestUpdatesQueryParam &
  RequestParameters;

export interface DeploymentsGetAllDeploymentsQueryParamProperties {
  /** Restricts the set of deployments returned. You can filter on update Provider, Name and Version property. */
  $filter?: string;
}

export interface DeploymentsGetAllDeploymentsQueryParam {
  queryParameters?: DeploymentsGetAllDeploymentsQueryParamProperties;
}

export type DeploymentsGetAllDeploymentsParameters = DeploymentsGetAllDeploymentsQueryParam &
  RequestParameters;
export type DeploymentsGetDeploymentParameters = RequestParameters;

export interface DeploymentsCreateOrUpdateDeploymentBodyParam {
  /** The deployment properties. */
  body: Deployment;
}

export interface DeploymentsCreateOrUpdateDeploymentMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DeploymentsCreateOrUpdateDeploymentParameters = DeploymentsCreateOrUpdateDeploymentMediaTypesParam &
  DeploymentsCreateOrUpdateDeploymentBodyParam &
  RequestParameters;
export type DeploymentsDeleteDeploymentParameters = RequestParameters;
export type DeploymentsGetDeploymentStatusParameters = RequestParameters;

export interface DeploymentsGetDeploymentDevicesQueryParamProperties {
  /** Restricts the set of deployment device states returned. You can filter on deviceId and/or deviceState. */
  $filter?: string;
}

export interface DeploymentsGetDeploymentDevicesQueryParam {
  queryParameters?: DeploymentsGetDeploymentDevicesQueryParamProperties;
}

export type DeploymentsGetDeploymentDevicesParameters = DeploymentsGetDeploymentDevicesQueryParam &
  RequestParameters;

export interface DeploymentsCancelDeploymentQueryParamProperties {
  /** Cancel deployment action. */
  action: "cancel";
}

export interface DeploymentsCancelDeploymentQueryParam {
  queryParameters: DeploymentsCancelDeploymentQueryParamProperties;
}

export type DeploymentsCancelDeploymentParameters = DeploymentsCancelDeploymentQueryParam &
  RequestParameters;

export interface DeploymentsRetryDeploymentQueryParamProperties {
  /** Retry deployment action. */
  action: "retry";
}

export interface DeploymentsRetryDeploymentQueryParam {
  queryParameters: DeploymentsRetryDeploymentQueryParamProperties;
}

export type DeploymentsRetryDeploymentParameters = DeploymentsRetryDeploymentQueryParam &
  RequestParameters;
