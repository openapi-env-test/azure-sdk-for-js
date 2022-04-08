/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DedicatedHostGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  DedicatedHostGroup,
  DedicatedHostGroupsListByResourceGroupNextOptionalParams,
  DedicatedHostGroupsListByResourceGroupOptionalParams,
  DedicatedHostGroupsListBySubscriptionNextOptionalParams,
  DedicatedHostGroupsListBySubscriptionOptionalParams,
  DedicatedHostGroupsCreateOrUpdateOptionalParams,
  DedicatedHostGroupsCreateOrUpdateResponse,
  DedicatedHostGroupUpdate,
  DedicatedHostGroupsUpdateOptionalParams,
  DedicatedHostGroupsUpdateResponse,
  DedicatedHostGroupsDeleteOptionalParams,
  DedicatedHostGroupsGetOptionalParams,
  DedicatedHostGroupsGetResponse,
  DedicatedHostGroupsListByResourceGroupResponse,
  DedicatedHostGroupsListBySubscriptionResponse,
  DedicatedHostGroupsListByResourceGroupNextResponse,
  DedicatedHostGroupsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DedicatedHostGroups operations. */
export class DedicatedHostGroupsImpl implements DedicatedHostGroups {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class DedicatedHostGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
   * the response to get the next page of dedicated host groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedHostGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedHostGroup> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DedicatedHostGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedHostGroup[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DedicatedHostGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedHostGroup> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
   * response to get the next page of dedicated host groups.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DedicatedHostGroupsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<DedicatedHostGroup> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: DedicatedHostGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DedicatedHostGroup[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: DedicatedHostGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DedicatedHostGroup> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups
   * please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param parameters Parameters supplied to the Create Dedicated Host Group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    parameters: DedicatedHostGroup,
    options?: DedicatedHostGroupsCreateOrUpdateOptionalParams
  ): Promise<DedicatedHostGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update an dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param parameters Parameters supplied to the Update Dedicated Host Group operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hostGroupName: string,
    parameters: DedicatedHostGroupUpdate,
    options?: DedicatedHostGroupsUpdateOptionalParams
  ): Promise<DedicatedHostGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete a dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves information about a dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostGroupsGetOptionalParams
  ): Promise<DedicatedHostGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
   * the response to get the next page of dedicated host groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedHostGroupsListByResourceGroupOptionalParams
  ): Promise<DedicatedHostGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
   * response to get the next page of dedicated host groups.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DedicatedHostGroupsListBySubscriptionOptionalParams
  ): Promise<DedicatedHostGroupsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DedicatedHostGroupsListByResourceGroupNextOptionalParams
  ): Promise<DedicatedHostGroupsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DedicatedHostGroupsListBySubscriptionNextOptionalParams
  ): Promise<DedicatedHostGroupsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroup
    },
    201: {
      bodyMapper: Mappers.DedicatedHostGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/hostGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
