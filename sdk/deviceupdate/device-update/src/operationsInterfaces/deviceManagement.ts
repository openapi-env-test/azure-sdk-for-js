import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DeviceClass,
  DeviceManagementListDeviceClassesOptionalParams,
  UpdateId,
  DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams,
  Device,
  DeviceManagementListDevicesOptionalParams,
  DeviceTag,
  DeviceManagementListDeviceTagsOptionalParams,
  Group,
  DeviceManagementListGroupsOptionalParams,
  UpdatableDevices,
  DeviceManagementListBestUpdatesForGroupOptionalParams,
  Deployment,
  DeviceManagementListDeploymentsForGroupOptionalParams,
  DeploymentDeviceState,
  DeviceManagementListDeploymentDevicesOptionalParams,
  DeviceOperation,
  DeviceManagementListOperationsOptionalParams,
  LogCollectionOperation,
  DeviceManagementListLogCollectionOperationsOptionalParams,
  DeviceManagementGetDeviceClassOptionalParams,
  DeviceManagementGetDeviceClassResponse,
  ImportAction,
  ImportType,
  DeviceManagementImportDevicesOptionalParams,
  DeviceManagementImportDevicesResponse,
  DeviceManagementGetDeviceOptionalParams,
  DeviceManagementGetDeviceResponse,
  DeviceManagementGetDeviceModuleOptionalParams,
  DeviceManagementGetDeviceModuleResponse,
  DeviceManagementGetUpdateComplianceOptionalParams,
  DeviceManagementGetUpdateComplianceResponse,
  DeviceManagementGetDeviceTagOptionalParams,
  DeviceManagementGetDeviceTagResponse,
  DeviceManagementGetGroupOptionalParams,
  DeviceManagementGetGroupResponse,
  DeviceManagementCreateOrUpdateGroupOptionalParams,
  DeviceManagementCreateOrUpdateGroupResponse,
  DeviceManagementDeleteGroupOptionalParams,
  DeviceManagementGetGroupUpdateComplianceOptionalParams,
  DeviceManagementGetGroupUpdateComplianceResponse,
  DeviceManagementGetDeploymentOptionalParams,
  DeviceManagementGetDeploymentResponse,
  DeviceManagementCreateOrUpdateDeploymentOptionalParams,
  DeviceManagementCreateOrUpdateDeploymentResponse,
  DeviceManagementDeleteDeploymentOptionalParams,
  DeviceManagementGetDeploymentStatusOptionalParams,
  DeviceManagementGetDeploymentStatusResponse,
  DeviceManagementGetOperationOptionalParams,
  DeviceManagementGetOperationResponse,
  DeviceManagementCollectLogsOptionalParams,
  DeviceManagementCollectLogsResponse,
  DeviceManagementGetLogCollectionOperationOptionalParams,
  DeviceManagementGetLogCollectionOperationResponse,
  DeviceManagementGetLogCollectionOperationDetailedStatusOptionalParams,
  DeviceManagementGetLogCollectionOperationDetailedStatusResponse,
  DeploymentCancelAction,
  DeviceManagementStopDeploymentOptionalParams,
  DeviceManagementStopDeploymentResponse,
  DeploymentRetryAction,
  DeviceManagementRetryDeploymentOptionalParams,
  DeviceManagementRetryDeploymentResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeviceManagement. */
export interface DeviceManagement {
  /**
   * Gets a list of all device classes (unique combinations of device manufacturer and model) for all
   * devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  listDeviceClasses(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): PagedAsyncIterableIterator<DeviceClass>;
  /**
   * Gets a list of installable updates for a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  listInstallableUpdatesForDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): PagedAsyncIterableIterator<UpdateId>;
  /**
   * Gets a list of devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  listDevices(
    options?: DeviceManagementListDevicesOptionalParams
  ): PagedAsyncIterableIterator<Device>;
  /**
   * Gets a list of available group device tags for all devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  listDeviceTags(
    options?: DeviceManagementListDeviceTagsOptionalParams
  ): PagedAsyncIterableIterator<DeviceTag>;
  /**
   * Gets a list of all device groups.
   * @param options The options parameters.
   */
  listGroups(
    options?: DeviceManagementListGroupsOptionalParams
  ): PagedAsyncIterableIterator<Group>;
  /**
   * Get the best available updates for a group and a count of how many devices need each update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  listBestUpdatesForGroup(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): PagedAsyncIterableIterator<UpdatableDevices>;
  /**
   * Gets a list of deployments for a group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  listDeploymentsForGroup(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): PagedAsyncIterableIterator<Deployment>;
  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  listDeploymentDevices(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementListDeploymentDevicesOptionalParams
  ): PagedAsyncIterableIterator<DeploymentDeviceState>;
  /**
   * Get a list of all device import operations. Completed operations are kept for 7 days before
   * auto-deleted.
   * @param options The options parameters.
   */
  listOperations(
    options?: DeviceManagementListOperationsOptionalParams
  ): PagedAsyncIterableIterator<DeviceOperation>;
  /**
   * Get all device diagnostics log collection operations
   * @param options The options parameters.
   */
  listLogCollectionOperations(
    options?: DeviceManagementListLogCollectionOperationsOptionalParams
  ): PagedAsyncIterableIterator<LogCollectionOperation>;
  /**
   * Gets the properties of a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementGetDeviceClassOptionalParams
  ): Promise<DeviceManagementGetDeviceClassResponse>;
  /**
   * Import existing devices from IoT Hub.
   * @param action Devices action.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  beginImportDevices(
    action: ImportAction,
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeviceManagementImportDevicesResponse>,
      DeviceManagementImportDevicesResponse
    >
  >;
  /**
   * Import existing devices from IoT Hub.
   * @param action Devices action.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  beginImportDevicesAndWait(
    action: ImportAction,
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<DeviceManagementImportDevicesResponse>;
  /**
   * Gets the device properties and latest deployment status for a device connected to Device Update for
   * IoT Hub.
   * @param deviceId Device identifier in Azure IoT Hub.
   * @param options The options parameters.
   */
  getDevice(
    deviceId: string,
    options?: DeviceManagementGetDeviceOptionalParams
  ): Promise<DeviceManagementGetDeviceResponse>;
  /**
   * Gets the device module properties and latest deployment status for a device module connected to
   * Device Update for IoT Hub.
   * @param deviceId Device identifier in Azure IoT Hub.
   * @param moduleId Device module identifier in Azure IoT Hub.
   * @param options The options parameters.
   */
  getDeviceModule(
    deviceId: string,
    moduleId: string,
    options?: DeviceManagementGetDeviceModuleOptionalParams
  ): Promise<DeviceManagementGetDeviceModuleResponse>;
  /**
   * Gets the breakdown of how many devices are on their latest update, have new updates available, or
   * are in progress receiving new updates.
   * @param options The options parameters.
   */
  getUpdateCompliance(
    options?: DeviceManagementGetUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetUpdateComplianceResponse>;
  /**
   * Gets a count of how many devices have a device tag.
   * @param tagName Tag name.
   * @param options The options parameters.
   */
  getDeviceTag(
    tagName: string,
    options?: DeviceManagementGetDeviceTagOptionalParams
  ): Promise<DeviceManagementGetDeviceTagResponse>;
  /**
   * Gets the properties of a group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getGroup(
    groupId: string,
    options?: DeviceManagementGetGroupOptionalParams
  ): Promise<DeviceManagementGetGroupResponse>;
  /**
   * Create or update a device group.
   * @param groupId Group identity.
   * @param group The group properties.
   * @param options The options parameters.
   */
  createOrUpdateGroup(
    groupId: string,
    group: Group,
    options?: DeviceManagementCreateOrUpdateGroupOptionalParams
  ): Promise<DeviceManagementCreateOrUpdateGroupResponse>;
  /**
   * Deletes a device group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  deleteGroup(
    groupId: string,
    options?: DeviceManagementDeleteGroupOptionalParams
  ): Promise<void>;
  /**
   * Get group update compliance information such as how many devices are on their latest update, how
   * many need new updates, and how many are in progress on receiving a new update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getGroupUpdateCompliance(
    groupId: string,
    options?: DeviceManagementGetGroupUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetGroupUpdateComplianceResponse>;
  /**
   * Gets the properties of a deployment.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  getDeployment(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementGetDeploymentOptionalParams
  ): Promise<DeviceManagementGetDeploymentResponse>;
  /**
   * Creates or updates a deployment.
   * @param deploymentId Deployment identifier.
   * @param groupId Group identity.
   * @param deployment The deployment properties.
   * @param options The options parameters.
   */
  createOrUpdateDeployment(
    deploymentId: string,
    groupId: string,
    deployment: Deployment,
    options?: DeviceManagementCreateOrUpdateDeploymentOptionalParams
  ): Promise<DeviceManagementCreateOrUpdateDeploymentResponse>;
  /**
   * Deletes a deployment.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  deleteDeployment(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementDeleteDeploymentOptionalParams
  ): Promise<void>;
  /**
   * Gets the status of a deployment including a breakdown of how many devices in the deployment are in
   * progress, completed, or failed.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  getDeploymentStatus(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementGetDeploymentStatusOptionalParams
  ): Promise<DeviceManagementGetDeploymentStatusResponse>;
  /**
   * Retrieve operation status.
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getOperation(
    operationId: string,
    options?: DeviceManagementGetOperationOptionalParams
  ): Promise<DeviceManagementGetOperationResponse>;
  /**
   * Start the device diagnostics log collection operation on specified devices.
   * @param operationId Operation identifier.
   * @param logCollectionRequest The deployment properties.
   * @param options The options parameters.
   */
  collectLogs(
    operationId: string,
    logCollectionRequest: LogCollectionOperation,
    options?: DeviceManagementCollectLogsOptionalParams
  ): Promise<DeviceManagementCollectLogsResponse>;
  /**
   * Get the device diagnostics log collection operation
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getLogCollectionOperation(
    operationId: string,
    options?: DeviceManagementGetLogCollectionOperationOptionalParams
  ): Promise<DeviceManagementGetLogCollectionOperationResponse>;
  /**
   * Get device diagnostics log collection operation with detailed status
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getLogCollectionOperationDetailedStatus(
    operationId: string,
    options?: DeviceManagementGetLogCollectionOperationDetailedStatusOptionalParams
  ): Promise<DeviceManagementGetLogCollectionOperationDetailedStatusResponse>;
  /**
   * Stops a deployment.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param action Cancel deployment action.
   * @param options The options parameters.
   */
  stopDeployment(
    groupId: string,
    deploymentId: string,
    action: DeploymentCancelAction,
    options?: DeviceManagementStopDeploymentOptionalParams
  ): Promise<DeviceManagementStopDeploymentResponse>;
  /**
   * Retries a deployment with failed devices.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param action Retry deployment action.
   * @param options The options parameters.
   */
  retryDeployment(
    groupId: string,
    deploymentId: string,
    action: DeploymentRetryAction,
    options?: DeviceManagementRetryDeploymentOptionalParams
  ): Promise<DeviceManagementRetryDeploymentResponse>;
}
