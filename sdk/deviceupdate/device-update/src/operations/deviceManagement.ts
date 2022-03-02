import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeviceManagement } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceUpdateClient } from "../deviceUpdateClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DeviceClass,
  DeviceManagementListDeviceClassesNextOptionalParams,
  DeviceManagementListDeviceClassesOptionalParams,
  UpdateId,
  DeviceManagementListInstallableUpdatesForDeviceClassNextOptionalParams,
  DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams,
  Device,
  DeviceManagementListDevicesNextOptionalParams,
  DeviceManagementListDevicesOptionalParams,
  DeviceTag,
  DeviceManagementListDeviceTagsNextOptionalParams,
  DeviceManagementListDeviceTagsOptionalParams,
  Group,
  DeviceManagementListGroupsNextOptionalParams,
  DeviceManagementListGroupsOptionalParams,
  UpdatableDevices,
  DeviceManagementListBestUpdatesForGroupNextOptionalParams,
  DeviceManagementListBestUpdatesForGroupOptionalParams,
  Deployment,
  DeviceManagementListDeploymentsForGroupNextOptionalParams,
  DeviceManagementListDeploymentsForGroupOptionalParams,
  DeploymentDeviceState,
  DeviceManagementListDeploymentDevicesNextOptionalParams,
  DeviceManagementListDeploymentDevicesOptionalParams,
  DeviceOperation,
  DeviceManagementListOperationsNextOptionalParams,
  DeviceManagementListOperationsOptionalParams,
  LogCollectionOperation,
  DeviceManagementListLogCollectionOperationsNextOptionalParams,
  DeviceManagementListLogCollectionOperationsOptionalParams,
  DeviceManagementListDeviceClassesResponse,
  DeviceManagementGetDeviceClassOptionalParams,
  DeviceManagementGetDeviceClassResponse,
  DeviceManagementListInstallableUpdatesForDeviceClassResponse,
  DeviceManagementListDevicesResponse,
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
  DeviceManagementListDeviceTagsResponse,
  DeviceManagementGetDeviceTagOptionalParams,
  DeviceManagementGetDeviceTagResponse,
  DeviceManagementListGroupsResponse,
  DeviceManagementGetGroupOptionalParams,
  DeviceManagementGetGroupResponse,
  DeviceManagementCreateOrUpdateGroupOptionalParams,
  DeviceManagementCreateOrUpdateGroupResponse,
  DeviceManagementDeleteGroupOptionalParams,
  DeviceManagementGetGroupUpdateComplianceOptionalParams,
  DeviceManagementGetGroupUpdateComplianceResponse,
  DeviceManagementListBestUpdatesForGroupResponse,
  DeviceManagementListDeploymentsForGroupResponse,
  DeviceManagementGetDeploymentOptionalParams,
  DeviceManagementGetDeploymentResponse,
  DeviceManagementCreateOrUpdateDeploymentOptionalParams,
  DeviceManagementCreateOrUpdateDeploymentResponse,
  DeviceManagementDeleteDeploymentOptionalParams,
  DeviceManagementGetDeploymentStatusOptionalParams,
  DeviceManagementGetDeploymentStatusResponse,
  DeviceManagementListDeploymentDevicesResponse,
  DeviceManagementGetOperationOptionalParams,
  DeviceManagementGetOperationResponse,
  DeviceManagementListOperationsResponse,
  DeviceManagementCollectLogsOptionalParams,
  DeviceManagementCollectLogsResponse,
  DeviceManagementGetLogCollectionOperationOptionalParams,
  DeviceManagementGetLogCollectionOperationResponse,
  DeviceManagementListLogCollectionOperationsResponse,
  DeviceManagementGetLogCollectionOperationDetailedStatusOptionalParams,
  DeviceManagementGetLogCollectionOperationDetailedStatusResponse,
  DeploymentCancelAction,
  DeviceManagementStopDeploymentOptionalParams,
  DeviceManagementStopDeploymentResponse,
  DeploymentRetryAction,
  DeviceManagementRetryDeploymentOptionalParams,
  DeviceManagementRetryDeploymentResponse,
  DeviceManagementListDeviceClassesNextResponse,
  DeviceManagementListInstallableUpdatesForDeviceClassNextResponse,
  DeviceManagementListDevicesNextResponse,
  DeviceManagementListDeviceTagsNextResponse,
  DeviceManagementListGroupsNextResponse,
  DeviceManagementListBestUpdatesForGroupNextResponse,
  DeviceManagementListDeploymentsForGroupNextResponse,
  DeviceManagementListDeploymentDevicesNextResponse,
  DeviceManagementListOperationsNextResponse,
  DeviceManagementListLogCollectionOperationsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeviceManagement operations. */
export class DeviceManagementImpl implements DeviceManagement {
  private readonly client: DeviceUpdateClient;

  /**
   * Initialize a new instance of the class DeviceManagement class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceUpdateClient) {
    this.client = client;
  }

  /**
   * Gets a list of all device classes (unique combinations of device manufacturer and model) for all
   * devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  public listDeviceClasses(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): PagedAsyncIterableIterator<DeviceClass> {
    const iter = this.listDeviceClassesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeviceClassesPagingPage(options);
      }
    };
  }

  private async *listDeviceClassesPagingPage(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): AsyncIterableIterator<DeviceClass[]> {
    let result = await this._listDeviceClasses(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeviceClassesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeviceClassesPagingAll(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): AsyncIterableIterator<DeviceClass> {
    for await (const page of this.listDeviceClassesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of installable updates for a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  public listInstallableUpdatesForDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): PagedAsyncIterableIterator<UpdateId> {
    const iter = this.listInstallableUpdatesForDeviceClassPagingAll(
      deviceClassId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listInstallableUpdatesForDeviceClassPagingPage(
          deviceClassId,
          options
        );
      }
    };
  }

  private async *listInstallableUpdatesForDeviceClassPagingPage(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): AsyncIterableIterator<UpdateId[]> {
    let result = await this._listInstallableUpdatesForDeviceClass(
      deviceClassId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listInstallableUpdatesForDeviceClassNext(
        deviceClassId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listInstallableUpdatesForDeviceClassPagingAll(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): AsyncIterableIterator<UpdateId> {
    for await (const page of this.listInstallableUpdatesForDeviceClassPagingPage(
      deviceClassId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  public listDevices(
    options?: DeviceManagementListDevicesOptionalParams
  ): PagedAsyncIterableIterator<Device> {
    const iter = this.listDevicesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDevicesPagingPage(options);
      }
    };
  }

  private async *listDevicesPagingPage(
    options?: DeviceManagementListDevicesOptionalParams
  ): AsyncIterableIterator<Device[]> {
    let result = await this._listDevices(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDevicesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDevicesPagingAll(
    options?: DeviceManagementListDevicesOptionalParams
  ): AsyncIterableIterator<Device> {
    for await (const page of this.listDevicesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of available group device tags for all devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  public listDeviceTags(
    options?: DeviceManagementListDeviceTagsOptionalParams
  ): PagedAsyncIterableIterator<DeviceTag> {
    const iter = this.listDeviceTagsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeviceTagsPagingPage(options);
      }
    };
  }

  private async *listDeviceTagsPagingPage(
    options?: DeviceManagementListDeviceTagsOptionalParams
  ): AsyncIterableIterator<DeviceTag[]> {
    let result = await this._listDeviceTags(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeviceTagsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeviceTagsPagingAll(
    options?: DeviceManagementListDeviceTagsOptionalParams
  ): AsyncIterableIterator<DeviceTag> {
    for await (const page of this.listDeviceTagsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all device groups.
   * @param options The options parameters.
   */
  public listGroups(
    options?: DeviceManagementListGroupsOptionalParams
  ): PagedAsyncIterableIterator<Group> {
    const iter = this.listGroupsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listGroupsPagingPage(options);
      }
    };
  }

  private async *listGroupsPagingPage(
    options?: DeviceManagementListGroupsOptionalParams
  ): AsyncIterableIterator<Group[]> {
    let result = await this._listGroups(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listGroupsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listGroupsPagingAll(
    options?: DeviceManagementListGroupsOptionalParams
  ): AsyncIterableIterator<Group> {
    for await (const page of this.listGroupsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the best available updates for a group and a count of how many devices need each update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  public listBestUpdatesForGroup(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): PagedAsyncIterableIterator<UpdatableDevices> {
    const iter = this.listBestUpdatesForGroupPagingAll(groupId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBestUpdatesForGroupPagingPage(groupId, options);
      }
    };
  }

  private async *listBestUpdatesForGroupPagingPage(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): AsyncIterableIterator<UpdatableDevices[]> {
    let result = await this._listBestUpdatesForGroup(groupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBestUpdatesForGroupNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBestUpdatesForGroupPagingAll(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): AsyncIterableIterator<UpdatableDevices> {
    for await (const page of this.listBestUpdatesForGroupPagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of deployments for a group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  public listDeploymentsForGroup(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): PagedAsyncIterableIterator<Deployment> {
    const iter = this.listDeploymentsForGroupPagingAll(groupId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeploymentsForGroupPagingPage(groupId, options);
      }
    };
  }

  private async *listDeploymentsForGroupPagingPage(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): AsyncIterableIterator<Deployment[]> {
    let result = await this._listDeploymentsForGroup(groupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeploymentsForGroupNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeploymentsForGroupPagingAll(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): AsyncIterableIterator<Deployment> {
    for await (const page of this.listDeploymentsForGroupPagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  public listDeploymentDevices(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementListDeploymentDevicesOptionalParams
  ): PagedAsyncIterableIterator<DeploymentDeviceState> {
    const iter = this.listDeploymentDevicesPagingAll(
      groupId,
      deploymentId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeploymentDevicesPagingPage(
          groupId,
          deploymentId,
          options
        );
      }
    };
  }

  private async *listDeploymentDevicesPagingPage(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementListDeploymentDevicesOptionalParams
  ): AsyncIterableIterator<DeploymentDeviceState[]> {
    let result = await this._listDeploymentDevices(
      groupId,
      deploymentId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeploymentDevicesNext(
        groupId,
        deploymentId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeploymentDevicesPagingAll(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementListDeploymentDevicesOptionalParams
  ): AsyncIterableIterator<DeploymentDeviceState> {
    for await (const page of this.listDeploymentDevicesPagingPage(
      groupId,
      deploymentId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of all device import operations. Completed operations are kept for 7 days before
   * auto-deleted.
   * @param options The options parameters.
   */
  public listOperations(
    options?: DeviceManagementListOperationsOptionalParams
  ): PagedAsyncIterableIterator<DeviceOperation> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: DeviceManagementListOperationsOptionalParams
  ): AsyncIterableIterator<DeviceOperation[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsPagingAll(
    options?: DeviceManagementListOperationsOptionalParams
  ): AsyncIterableIterator<DeviceOperation> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all device diagnostics log collection operations
   * @param options The options parameters.
   */
  public listLogCollectionOperations(
    options?: DeviceManagementListLogCollectionOperationsOptionalParams
  ): PagedAsyncIterableIterator<LogCollectionOperation> {
    const iter = this.listLogCollectionOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listLogCollectionOperationsPagingPage(options);
      }
    };
  }

  private async *listLogCollectionOperationsPagingPage(
    options?: DeviceManagementListLogCollectionOperationsOptionalParams
  ): AsyncIterableIterator<LogCollectionOperation[]> {
    let result = await this._listLogCollectionOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listLogCollectionOperationsNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listLogCollectionOperationsPagingAll(
    options?: DeviceManagementListLogCollectionOperationsOptionalParams
  ): AsyncIterableIterator<LogCollectionOperation> {
    for await (const page of this.listLogCollectionOperationsPagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all device classes (unique combinations of device manufacturer and model) for all
   * devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  private _listDeviceClasses(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): Promise<DeviceManagementListDeviceClassesResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDeviceClassesOperationSpec
    );
  }

  /**
   * Gets the properties of a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementGetDeviceClassOptionalParams
  ): Promise<DeviceManagementGetDeviceClassResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, options },
      getDeviceClassOperationSpec
    );
  }

  /**
   * Gets a list of installable updates for a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  private _listInstallableUpdatesForDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): Promise<DeviceManagementListInstallableUpdatesForDeviceClassResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, options },
      listInstallableUpdatesForDeviceClassOperationSpec
    );
  }

  /**
   * Gets a list of devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  private _listDevices(
    options?: DeviceManagementListDevicesOptionalParams
  ): Promise<DeviceManagementListDevicesResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDevicesOperationSpec
    );
  }

  /**
   * Import existing devices from IoT Hub.
   * @param action Devices action.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  async beginImportDevices(
    action: ImportAction,
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeviceManagementImportDevicesResponse>,
      DeviceManagementImportDevicesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeviceManagementImportDevicesResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { action, importType, options },
      importDevicesOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Import existing devices from IoT Hub.
   * @param action Devices action.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  async beginImportDevicesAndWait(
    action: ImportAction,
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<DeviceManagementImportDevicesResponse> {
    const poller = await this.beginImportDevices(action, importType, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the device properties and latest deployment status for a device connected to Device Update for
   * IoT Hub.
   * @param deviceId Device identifier in Azure IoT Hub.
   * @param options The options parameters.
   */
  getDevice(
    deviceId: string,
    options?: DeviceManagementGetDeviceOptionalParams
  ): Promise<DeviceManagementGetDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceId, options },
      getDeviceOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeviceModuleResponse> {
    return this.client.sendOperationRequest(
      { deviceId, moduleId, options },
      getDeviceModuleOperationSpec
    );
  }

  /**
   * Gets the breakdown of how many devices are on their latest update, have new updates available, or
   * are in progress receiving new updates.
   * @param options The options parameters.
   */
  getUpdateCompliance(
    options?: DeviceManagementGetUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetUpdateComplianceResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUpdateComplianceOperationSpec
    );
  }

  /**
   * Gets a list of available group device tags for all devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  private _listDeviceTags(
    options?: DeviceManagementListDeviceTagsOptionalParams
  ): Promise<DeviceManagementListDeviceTagsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDeviceTagsOperationSpec
    );
  }

  /**
   * Gets a count of how many devices have a device tag.
   * @param tagName Tag name.
   * @param options The options parameters.
   */
  getDeviceTag(
    tagName: string,
    options?: DeviceManagementGetDeviceTagOptionalParams
  ): Promise<DeviceManagementGetDeviceTagResponse> {
    return this.client.sendOperationRequest(
      { tagName, options },
      getDeviceTagOperationSpec
    );
  }

  /**
   * Gets a list of all device groups.
   * @param options The options parameters.
   */
  private _listGroups(
    options?: DeviceManagementListGroupsOptionalParams
  ): Promise<DeviceManagementListGroupsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listGroupsOperationSpec
    );
  }

  /**
   * Gets the properties of a group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getGroup(
    groupId: string,
    options?: DeviceManagementGetGroupOptionalParams
  ): Promise<DeviceManagementGetGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getGroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementCreateOrUpdateGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, group, options },
      createOrUpdateGroupOperationSpec
    );
  }

  /**
   * Deletes a device group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  deleteGroup(
    groupId: string,
    options?: DeviceManagementDeleteGroupOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, options },
      deleteGroupOperationSpec
    );
  }

  /**
   * Get group update compliance information such as how many devices are on their latest update, how
   * many need new updates, and how many are in progress on receiving a new update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getGroupUpdateCompliance(
    groupId: string,
    options?: DeviceManagementGetGroupUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetGroupUpdateComplianceResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getGroupUpdateComplianceOperationSpec
    );
  }

  /**
   * Get the best available updates for a group and a count of how many devices need each update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  private _listBestUpdatesForGroup(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): Promise<DeviceManagementListBestUpdatesForGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      listBestUpdatesForGroupOperationSpec
    );
  }

  /**
   * Gets a list of deployments for a group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  private _listDeploymentsForGroup(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): Promise<DeviceManagementListDeploymentsForGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      listDeploymentsForGroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      getDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementCreateOrUpdateDeploymentResponse> {
    return this.client.sendOperationRequest(
      { deploymentId, groupId, deployment, options },
      createOrUpdateDeploymentOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      deleteDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeploymentStatusResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      getDeploymentStatusOperationSpec
    );
  }

  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  private _listDeploymentDevices(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementListDeploymentDevicesOptionalParams
  ): Promise<DeviceManagementListDeploymentDevicesResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      listDeploymentDevicesOperationSpec
    );
  }

  /**
   * Retrieve operation status.
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getOperation(
    operationId: string,
    options?: DeviceManagementGetOperationOptionalParams
  ): Promise<DeviceManagementGetOperationResponse> {
    return this.client.sendOperationRequest(
      { operationId, options },
      getOperationOperationSpec
    );
  }

  /**
   * Get a list of all device import operations. Completed operations are kept for 7 days before
   * auto-deleted.
   * @param options The options parameters.
   */
  private _listOperations(
    options?: DeviceManagementListOperationsOptionalParams
  ): Promise<DeviceManagementListOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listOperationsOperationSpec
    );
  }

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
  ): Promise<DeviceManagementCollectLogsResponse> {
    return this.client.sendOperationRequest(
      { operationId, logCollectionRequest, options },
      collectLogsOperationSpec
    );
  }

  /**
   * Get the device diagnostics log collection operation
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getLogCollectionOperation(
    operationId: string,
    options?: DeviceManagementGetLogCollectionOperationOptionalParams
  ): Promise<DeviceManagementGetLogCollectionOperationResponse> {
    return this.client.sendOperationRequest(
      { operationId, options },
      getLogCollectionOperationOperationSpec
    );
  }

  /**
   * Get all device diagnostics log collection operations
   * @param options The options parameters.
   */
  private _listLogCollectionOperations(
    options?: DeviceManagementListLogCollectionOperationsOptionalParams
  ): Promise<DeviceManagementListLogCollectionOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listLogCollectionOperationsOperationSpec
    );
  }

  /**
   * Get device diagnostics log collection operation with detailed status
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getLogCollectionOperationDetailedStatus(
    operationId: string,
    options?: DeviceManagementGetLogCollectionOperationDetailedStatusOptionalParams
  ): Promise<DeviceManagementGetLogCollectionOperationDetailedStatusResponse> {
    return this.client.sendOperationRequest(
      { operationId, options },
      getLogCollectionOperationDetailedStatusOperationSpec
    );
  }

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
  ): Promise<DeviceManagementStopDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, action, options },
      stopDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementRetryDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, action, options },
      retryDeploymentOperationSpec
    );
  }

  /**
   * ListDeviceClassesNext
   * @param nextLink The nextLink from the previous successful call to the ListDeviceClasses method.
   * @param options The options parameters.
   */
  private _listDeviceClassesNext(
    nextLink: string,
    options?: DeviceManagementListDeviceClassesNextOptionalParams
  ): Promise<DeviceManagementListDeviceClassesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDeviceClassesNextOperationSpec
    );
  }

  /**
   * ListInstallableUpdatesForDeviceClassNext
   * @param deviceClassId Device class identifier.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListInstallableUpdatesForDeviceClass method.
   * @param options The options parameters.
   */
  private _listInstallableUpdatesForDeviceClassNext(
    deviceClassId: string,
    nextLink: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassNextOptionalParams
  ): Promise<DeviceManagementListInstallableUpdatesForDeviceClassNextResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, nextLink, options },
      listInstallableUpdatesForDeviceClassNextOperationSpec
    );
  }

  /**
   * ListDevicesNext
   * @param nextLink The nextLink from the previous successful call to the ListDevices method.
   * @param options The options parameters.
   */
  private _listDevicesNext(
    nextLink: string,
    options?: DeviceManagementListDevicesNextOptionalParams
  ): Promise<DeviceManagementListDevicesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDevicesNextOperationSpec
    );
  }

  /**
   * ListDeviceTagsNext
   * @param nextLink The nextLink from the previous successful call to the ListDeviceTags method.
   * @param options The options parameters.
   */
  private _listDeviceTagsNext(
    nextLink: string,
    options?: DeviceManagementListDeviceTagsNextOptionalParams
  ): Promise<DeviceManagementListDeviceTagsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDeviceTagsNextOperationSpec
    );
  }

  /**
   * ListGroupsNext
   * @param nextLink The nextLink from the previous successful call to the ListGroups method.
   * @param options The options parameters.
   */
  private _listGroupsNext(
    nextLink: string,
    options?: DeviceManagementListGroupsNextOptionalParams
  ): Promise<DeviceManagementListGroupsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listGroupsNextOperationSpec
    );
  }

  /**
   * ListBestUpdatesForGroupNext
   * @param groupId Group identity.
   * @param nextLink The nextLink from the previous successful call to the ListBestUpdatesForGroup
   *                 method.
   * @param options The options parameters.
   */
  private _listBestUpdatesForGroupNext(
    groupId: string,
    nextLink: string,
    options?: DeviceManagementListBestUpdatesForGroupNextOptionalParams
  ): Promise<DeviceManagementListBestUpdatesForGroupNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listBestUpdatesForGroupNextOperationSpec
    );
  }

  /**
   * ListDeploymentsForGroupNext
   * @param groupId Group identity.
   * @param nextLink The nextLink from the previous successful call to the ListDeploymentsForGroup
   *                 method.
   * @param options The options parameters.
   */
  private _listDeploymentsForGroupNext(
    groupId: string,
    nextLink: string,
    options?: DeviceManagementListDeploymentsForGroupNextOptionalParams
  ): Promise<DeviceManagementListDeploymentsForGroupNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listDeploymentsForGroupNextOperationSpec
    );
  }

  /**
   * ListDeploymentDevicesNext
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param nextLink The nextLink from the previous successful call to the ListDeploymentDevices method.
   * @param options The options parameters.
   */
  private _listDeploymentDevicesNext(
    groupId: string,
    deploymentId: string,
    nextLink: string,
    options?: DeviceManagementListDeploymentDevicesNextOptionalParams
  ): Promise<DeviceManagementListDeploymentDevicesNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, nextLink, options },
      listDeploymentDevicesNextOperationSpec
    );
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  private _listOperationsNext(
    nextLink: string,
    options?: DeviceManagementListOperationsNextOptionalParams
  ): Promise<DeviceManagementListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listOperationsNextOperationSpec
    );
  }

  /**
   * ListLogCollectionOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListLogCollectionOperations
   *                 method.
   * @param options The options parameters.
   */
  private _listLogCollectionOperationsNext(
    nextLink: string,
    options?: DeviceManagementListLogCollectionOperationsNextOptionalParams
  ): Promise<DeviceManagementListLogCollectionOperationsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listLogCollectionOperationsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listDeviceClassesOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/deviceclasses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceClassOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/deviceclasses/{deviceClassId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClass
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listInstallableUpdatesForDeviceClassOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/deviceclasses/{deviceClassId}/installableupdates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateIdsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDevicesOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/devices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const importDevicesOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/devices",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    201: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    202: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    204: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.importType,
  queryParameters: [Parameters.action, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDeviceOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/devices/{deviceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceModuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/devices/{deviceId}/modules/{moduleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceId,
    Parameters.moduleId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getUpdateComplianceOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/updatecompliance",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateCompliance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceTagsOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/devicetags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceTagsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceTagOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/devicetags/{tagName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceTag
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.tagName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/groups/{groupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Group
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/groups/{groupId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Group
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.group,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/groups/{groupId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupUpdateComplianceOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/updateCompliance",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateCompliance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBestUpdatesForGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/groups/{groupId}/bestUpdates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdatableDevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentsForGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.deployment,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeploymentStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentDevicesOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}/devicestates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentDeviceStatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceOperation,
      headersMapper: Mappers.DeviceManagementGetOperationHeaders
    },
    304: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/deviceupdate/{instanceId}/management/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceOperationsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const collectLogsOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.LogCollectionOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.logCollectionRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getLogCollectionOperationOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogCollectionOperationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/deviceDiagnostics/logCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionOperationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getLogCollectionOperationDetailedStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}/detailedStatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionOperationDetailedStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.action1],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const retryDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceupdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.action2],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceClassesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listInstallableUpdatesForDeviceClassNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateIdsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDevicesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceTagsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceTagsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listGroupsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBestUpdatesForGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdatableDevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentsForGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentDevicesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentDeviceStatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceOperationsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogCollectionOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionOperationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
