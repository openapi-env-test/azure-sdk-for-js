/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByPrivateLinkScopeNextOptionalParams,
  PrivateLinkResourcesListByPrivateLinkScopeOptionalParams,
  PrivateLinkResourcesListByPrivateLinkScopeResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse,
  PrivateLinkResourcesListByPrivateLinkScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param options The options parameters.
   */
  public listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkResourcesListByPrivateLinkScopeOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByPrivateLinkScopePagingAll(
      resourceGroupName,
      scopeName,
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
        return this.listByPrivateLinkScopePagingPage(
          resourceGroupName,
          scopeName,
          options
        );
      }
    };
  }

  private async *listByPrivateLinkScopePagingPage(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkResourcesListByPrivateLinkScopeOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByPrivateLinkScope(
      resourceGroupName,
      scopeName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByPrivateLinkScopeNext(
        resourceGroupName,
        scopeName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByPrivateLinkScopePagingAll(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkResourcesListByPrivateLinkScopeOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByPrivateLinkScopePagingPage(
      resourceGroupName,
      scopeName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param options The options parameters.
   */
  private _listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkResourcesListByPrivateLinkScopeOptionalParams
  ): Promise<PrivateLinkResourcesListByPrivateLinkScopeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, options },
      listByPrivateLinkScopeOperationSpec
    );
  }

  /**
   * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param groupName The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scopeName: string,
    groupName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, groupName, options },
      getOperationSpec
    );
  }

  /**
   * ListByPrivateLinkScopeNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param nextLink The nextLink from the previous successful call to the ListByPrivateLinkScope method.
   * @param options The options parameters.
   */
  private _listByPrivateLinkScopeNext(
    resourceGroupName: string,
    scopeName: string,
    nextLink: string,
    options?: PrivateLinkResourcesListByPrivateLinkScopeNextOptionalParams
  ): Promise<PrivateLinkResourcesListByPrivateLinkScopeNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, nextLink, options },
      listByPrivateLinkScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByPrivateLinkScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateLinkResources/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.scopeName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPrivateLinkScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
