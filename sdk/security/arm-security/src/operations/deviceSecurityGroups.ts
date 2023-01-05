/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeviceSecurityGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  DeviceSecurityGroup,
  DeviceSecurityGroupsListNextOptionalParams,
  DeviceSecurityGroupsListOptionalParams,
  DeviceSecurityGroupsListResponse,
  DeviceSecurityGroupsGetOptionalParams,
  DeviceSecurityGroupsGetResponse,
  DeviceSecurityGroupsCreateOrUpdateOptionalParams,
  DeviceSecurityGroupsCreateOrUpdateResponse,
  DeviceSecurityGroupsDeleteOptionalParams,
  DeviceSecurityGroupsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeviceSecurityGroups operations. */
export class DeviceSecurityGroupsImpl implements DeviceSecurityGroups {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class DeviceSecurityGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Use this method get the list of device security groups for the specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceId: string,
    options?: DeviceSecurityGroupsListOptionalParams
  ): PagedAsyncIterableIterator<DeviceSecurityGroup> {
    const iter = this.listPagingAll(resourceId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(resourceId, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceId: string,
    options?: DeviceSecurityGroupsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeviceSecurityGroup[]> {
    let result: DeviceSecurityGroupsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceId, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceId: string,
    options?: DeviceSecurityGroupsListOptionalParams
  ): AsyncIterableIterator<DeviceSecurityGroup> {
    for await (const page of this.listPagingPage(resourceId, options)) {
      yield* page;
    }
  }

  /**
   * Use this method get the list of device security groups for the specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceId: string,
    options?: DeviceSecurityGroupsListOptionalParams
  ): Promise<DeviceSecurityGroupsListResponse> {
    return this.client.sendOperationRequest(
      { resourceId, options },
      listOperationSpec
    );
  }

  /**
   * Use this method to get the device security group for the specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param deviceSecurityGroupName The name of the device security group. Note that the name of the
   *                                device security group is case insensitive.
   * @param options The options parameters.
   */
  get(
    resourceId: string,
    deviceSecurityGroupName: string,
    options?: DeviceSecurityGroupsGetOptionalParams
  ): Promise<DeviceSecurityGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceId, deviceSecurityGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Use this method to creates or updates the device security group on a specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param deviceSecurityGroupName The name of the device security group. Note that the name of the
   *                                device security group is case insensitive.
   * @param deviceSecurityGroup Security group object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceId: string,
    deviceSecurityGroupName: string,
    deviceSecurityGroup: DeviceSecurityGroup,
    options?: DeviceSecurityGroupsCreateOrUpdateOptionalParams
  ): Promise<DeviceSecurityGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceId, deviceSecurityGroupName, deviceSecurityGroup, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * User this method to deletes the device security group.
   * @param resourceId The identifier of the resource.
   * @param deviceSecurityGroupName The name of the device security group. Note that the name of the
   *                                device security group is case insensitive.
   * @param options The options parameters.
   */
  delete(
    resourceId: string,
    deviceSecurityGroupName: string,
    options?: DeviceSecurityGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceId, deviceSecurityGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceId The identifier of the resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceId: string,
    nextLink: string,
    options?: DeviceSecurityGroupsListNextOptionalParams
  ): Promise<DeviceSecurityGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}/providers/Microsoft.Security/deviceSecurityGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceSecurityGroupList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceSecurityGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.deviceSecurityGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceSecurityGroup
    },
    201: {
      bodyMapper: Mappers.DeviceSecurityGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.deviceSecurityGroup,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.deviceSecurityGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.deviceSecurityGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceSecurityGroupList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
